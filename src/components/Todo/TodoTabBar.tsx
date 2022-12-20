import React from 'react';
import styled from 'styled-components';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

type Route = {
    key: string;
    name: string;
    params?: object | undefined;
};

const Container = styled(View)`
    // margin-top: 16px;

    background-color: white;
`;

const TabWrapper = styled(View)`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-around;
    // margin-top: 16px;
    padding-left: 4px;
`;

const TabButton = styled(TouchableOpacity)<{ isFocused: boolean }>`
    align-items: center;
    justify-content: center;
    height: 50px;
    // margin: 0px 16px;
    // padding-left: 65px;
    // padding-right: 65px;
    width: 50%;
    border-top-width: 2px;
    border-top-color: ${props => (props.isFocused ? '#2E4E3F' : 'transparent')};
    border-bottom-width: 2px;
    border-bottom-color: ${props =>
        props.isFocused ? 'transparent' : '#2E4E3F'};
    // borderLeftWidth: ${props => (props.isFocused ? '2px' : '0px')};
    // borderRightWidth: ${props => (props.isFocused ? '2px' : '0px')};
`;

const TabText = styled(Text)<{ isFocused: boolean }>`
    font-weight: 800;
    color: ${props => (props.isFocused ? '#2E4E3F' : '#D9E4D4')};
`;

export default function TodoTabBar({
    state,
    descriptors,
    navigation,
}: MaterialTopTabBarProps) {
    return (
        <Container>
            <TabWrapper>
                {state.routes.map((route: Route, index: number) => {
                    // const {options} = descriptors[route.key];
                    // const label = options.tabBarLabel;
                    const label = route.name;
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };
                    return (
                        <TabButton
                            isFocused={isFocused}
                            onPress={onPress}
                            key={`tab_${index}`}>
                            <TabText isFocused={isFocused}>{label}</TabText>
                        </TabButton>
                    );
                })}
            </TabWrapper>
        </Container>
    );
}
