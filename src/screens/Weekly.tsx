import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components';
import WeekCalndar from '../components/Todo/WeekCalendar'

const WeeklyScreen = () => {
    return (
        <CenterSafeAreaView>
            <WeekCalndar></WeekCalndar>
        </CenterSafeAreaView>
    );
};

const CenterSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    // justify-content: center;
    // align-items: center;
    background-color: #ffffff;
`;

export default WeeklyScreen;
