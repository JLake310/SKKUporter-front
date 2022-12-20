import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ChatStackParamList } from '../types/ChatStackParamList';
import ChatMainScreen from './ChatMain';
import ChatRoomScreen from './ChatRoom';

const ChatStack = createStackNavigator<ChatStackParamList>();

const ChatScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <ChatStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <ChatStack.Screen name="Main" component={ChatMainScreen} />
                <ChatStack.Screen name="Room" component={ChatRoomScreen} />
            </ChatStack.Navigator>
        </NavigationContainer>
    );
};

export default ChatScreen;
