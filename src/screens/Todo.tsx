import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CalendarScreen from './Calendar';
import ChecklistScreen from './Checklist';
import TodoTabBar from '../components/Todo/TodoTabBar';

const Tab = createMaterialTopTabNavigator();

const TodoScreen = () => {
    return (
        <Tab.Navigator
            tabBar={props => <TodoTabBar {...props} />}
            initialRouteName="Calendar"
            screenOptions={{
                tabBarActiveTintColor: '#2E4E3F',
            }}>
            <Tab.Screen name="Calendar" component={CalendarScreen} />
            <Tab.Screen name="Checklist" component={ChecklistScreen} />
        </Tab.Navigator>
    );
};

export default TodoScreen;
