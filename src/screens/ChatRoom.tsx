import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import styled from 'styled-components';
import Message from '../components/Chat/Message';
import { palette } from '../styles/palette';
import { ChatStackParamList } from '../types/ChatStackParamList';
import chat from '../assets/data/chat.json';

type ChatScreenNavigationProp = StackNavigationProp<ChatStackParamList, 'Main'>;
type ChatRoomScreenRouteProp = RouteProp<ChatStackParamList, 'Room'>;

interface Props {
    navigation: ChatScreenNavigationProp;
    route: ChatRoomScreenRouteProp;
}

const ChatRoomScreen = (props: Props) => {
    const { navigation, route } = props;

    return (
        <CenterSafeAreaView>
            <ContentView>
                <Header>
                    <BackButton onPress={() => navigation.goBack()}>
                        <BackArrow
                            source={require('../assets/icons/back_arrow.png')}
                        />
                    </BackButton>
                    <Title>{route.params.title}</Title>
                    <Notification
                        source={require('../assets/icons/notification_off.png')}
                    />
                </Header>
                <Line />
                <ChatView>
                    {chat[0].messages?.map(item => {
                        return (
                            <Message
                                isMe={item.name === '익명1'}
                                name={item.name}
                                message={item.message}
                                time={item.time}
                            />
                        );
                    })}
                </ChatView>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={115}
                    behavior="padding"
                    enabled>
                    <SendView>
                        <Media
                            source={require('../assets/icons/media_on.png')}
                        />
                        <StyledTextInput />
                        <Send source={require('../assets/icons/send.png')} />
                    </SendView>
                </KeyboardAvoidingView>
            </ContentView>
        </CenterSafeAreaView>
    );
};

const CenterSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
`;

const ContentView = styled(View)`
    flex: 1;
    width: 100%;
    align-items: flex-start;
`;

const Header = styled(View)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ChatView = styled(ScrollView)`
    width: 100%;
    flex: 1;
`;

const SendView = styled(View)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled(Text)`
    height: 22px;
    margin-top: 21.4px;
    margin-bottom: 11.51px;
    text-align: center;
    color: ${palette.DEEP_GREEN};
    font-size: 16px;
    font-family: 'OpenSans-Bold';
`;

const Notification = styled(Image)`
    width: 20px;
    height: 20px;
    margin-right: 9px;
`;

const Media = styled(Image)`
    width: 25px;
    height: 25px;
    margin-left: 7px;
`;

const Send = styled(Image)`
    width: 27px;
    height: 27px;
    margin-right: 9px;
`;

const BackButton = styled(TouchableOpacity)`
    margin-top: 10px;
    margin-left: 13px;
`;

const BackArrow = styled(Image)``;

const Line = styled(View)`
    width: 100%;
    border: 0.7px solid ${palette.DEEP_GREEN};
`;

const StyledTextInput = styled(TextInput)`
    border: 1px solid ${palette.DEEP_GREEN};
    border-radius: 10px;
    padding: 0px 10px;
    width: 308px;
    height: 33px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export default ChatRoomScreen;
