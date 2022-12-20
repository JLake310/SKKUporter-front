import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MonthlyScreen from './Monthly';
import WeeklyScreen from './Weekly';
import CalendarTabBar from '../components/Todo/CalendarTabBar';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const CalendarScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator tabBar={props => <CalendarTabBar {...props} />}>
                <Tab.Screen name="Monthly" component={MonthlyScreen} />
                <Tab.Screen name="Weekly" component={WeeklyScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default CalendarScreen;
