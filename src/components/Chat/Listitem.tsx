import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { palette } from '../../styles/palette';

interface Props {
    handleNavigation: () => void;
    title: string;
    lastMessage: string;
    isNotificationOff?: boolean;
    time: string;
    messageNumber: number;
}

const ListItem = (props: Props) => {
    const {
        handleNavigation,
        title,
        lastMessage,
        isNotificationOff,
        time,
        messageNumber,
    } = props;

    return (
        <StyledView onPress={handleNavigation}>
            <MainSection>
                <Title>{title}</Title>
                <LastMessage>{lastMessage}</LastMessage>
            </MainSection>
            <SubSection>
                <HorizontalView>
                    {isNotificationOff && (
                        <Icon
                            source={require('../../assets/icons/notification_on.png')}
                        />
                    )}
                    <Time>{time}</Time>
                </HorizontalView>
                {messageNumber > 0 && (
                    <Circle>
                        <MessageNumber>{messageNumber}</MessageNumber>
                    </Circle>
                )}
            </SubSection>
        </StyledView>
    );
};

const StyledView = styled(TouchableOpacity)`
    width: 100%;
    height: 70px;
    flex-direction: row;
`;

const MainSection = styled(View)`
    width: 80%;
`;

const SubSection = styled(View)`
    width: 20%;
    align-items: flex-end;
`;

const HorizontalView = styled(View)`
    margin-top: 15px;
    margin-right: 12px;
    flex-direction: row;
`;

const Title = styled(Text)`
    margin-top: 9px;
    margin-left: 13px;
    font-family: 'OpenSans-Bold';
    font-size: 13px;
    color: ${palette.DEEP_GREEN};
`;

const LastMessage = styled(Text)`
    margin-top: 9px;
    margin-left: 13px;
    font-size: 10px;
    color: gray;
`;

const Icon = styled(Image)`
    width: 10px;
    height: 10px;
    margin-right: 4px;
`;

const Time = styled(Text)`
    color: ${palette.DEEP_GREEN};
    font-size: 9px;
`;

const Circle = styled(View)`
    margin-top: 11px;
    margin-right: 12px;
    width: 17px;
    height: 17px;
    background-color: ${palette.POINT};
    border-radius: 8.5px;
    justify-content: center;
    align-items: center;
`;

const MessageNumber = styled(Text)`
    font-size: 9px;
`;

export default ListItem;
