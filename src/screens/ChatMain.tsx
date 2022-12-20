import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components';
import ListItem from '../components/Chat/Listitem';
import { ChatStackParamList } from '../types/ChatStackParamList';
import chat from '../assets/data/chat.json';

type ChatScreenNavigationProp = StackNavigationProp<ChatStackParamList, 'Main'>;

type Props = {
    navigation: ChatScreenNavigationProp;
};

const ChatMainScreen = (props: Props) => {
    const { navigation } = props;

    const handleNavigation = (title: string) => {
        navigation.navigate('Room', { title });
    };

    return (
        <CenterSafeAreaView>
            <ContentView>
                <TabTitle>
                    <TabTitleText>Chat</TabTitleText>
                </TabTitle>
                <ScrollView>
                    {chat.map(item => {
                        return (
                            <ListItem
                                handleNavigation={() =>
                                    handleNavigation(item.title)
                                }
                                title={item.title}
                                lastMessage={item.lastMessage}
                                isNotificationOff={item.isNotificationOff}
                                messageNumber={item.messageNumber}
                                time={item.time}
                            />
                        );
                    })}
                </ScrollView>
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

const TabTitle = styled(View)`
    margin-top: 10px;
    border-bottom-width: 1px;
    border-bottom-color: #2e4e3f;
    width: 100%;
    margin-top: 10px;
`;

const TabTitleText = styled(Text)`
    font-size: 25px;
    margin-left: 10px;
    color: #2e4e3f;
    font-weight: bold;
`;

export default ChatMainScreen;
