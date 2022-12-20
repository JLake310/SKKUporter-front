import React, { useEffect } from 'react';
import { Image, SafeAreaView, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import { palette } from '../styles/palette';

type OnboardingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Onboarding'
>;

type Props = {
    navigation: OnboardingScreenNavigationProp;
};

const OnboardingScreen = (props: Props) => {
    const { navigation } = props;

    useEffect(() => {
        setTimeout(() => navigation.navigate('Login'), 3000);
    }, [navigation]);

    return (
        <CenterSafeAreaView>
            {/* <SmallLogo source={require('../assets/images/skku.png')} />
            <Title>SKKUporter</Title> */}
            <Logo source={require('../assets/images/Logo.png')}></Logo>
        </CenterSafeAreaView>
    );
};

const CenterSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${palette.DEEP_GREEN};
`;

const Logo = styled(Image)`

`;

const SmallLogo = styled(Image)`
    position: absolute;
    left: 35px;
    top: 335px;
    width: 100px;
    height: 120px;
`;

const Title = styled(Text)`
    color: ${palette.BASIC};
    font-size: 45px;
    font-family: 'OleoScript-Regular';
`;

export default OnboardingScreen;
