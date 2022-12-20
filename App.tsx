import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from './src/screens/Setting';
import LoginScreen from './src/screens/Login';
import { RootStackParamList } from './src/types/RootStackParamList';
import MainScreen from './src/screens/Main';
import OnboardingScreen from './src/screens/Onboarding';

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="Onboarding"
                    component={OnboardingScreen}
                />
                <RootStack.Screen name="Login" component={LoginScreen} />
                <RootStack.Screen name="Main" component={MainScreen} />
                <RootStack.Screen name="Setting" component={SettingScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
