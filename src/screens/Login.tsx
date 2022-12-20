import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { palette } from '../styles/palette';
import { RootStackParamList } from '../types/RootStackParamList';

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Login'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const LoginScreen = (props: Props) => {
    const { navigation } = props;

    return (
        <CenterSafeAreaView>
            <Banner source={require('../assets/images/banner.png')} />
            <StyledTextInput placeholder="ID" />
            <StyledTextInput placeholder="PW" />
            <StyledButton onPress={() => navigation.navigate('Main')}>
                <ButtonText>로그인</ButtonText>
            </StyledButton>
        </CenterSafeAreaView>
    );
};

const Banner = styled(Image)`
    margin-bottom: 50px;
`;

const CenterSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${palette.BASIC};
`;

const StyledTextInput = styled(TextInput)`
    border: 2px solid ${palette.LIGHT_GREEN};
    border-radius: 5px;
    padding: 0px 10px;
    width: 225px;
    height: 50px;
    margin-bottom: 10px;
`;

const StyledButton = styled(TouchableOpacity)`
    background-color: ${palette.DEEP_GREEN};
    width: 225px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

const ButtonText = styled(Text)`
    color: #ffffff;
    font-size: 20px;
    font-family: 'OpenSansHebrew-Light';
`;

export default LoginScreen;
