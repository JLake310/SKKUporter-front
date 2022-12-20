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
    align-items: center;
    background-color: white;
`;

const TabWrapper = styled(View)`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-around;
    // margin-top: 16px;
    padding-left: 4px;
    //   border: 1px;
    width: 260px;
    borderRadius: 25px;
    margin: 10px;
    height: 45px;
    background-color: #d9e4d4;
`;

const TabButton = styled(TouchableOpacity)<{ isFocused: boolean }>`
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 0px 16px;
`;

const TabText = styled(Text)<{ isFocused: boolean }>`
  font-weight: 800;
  color: ${props => (props.isFocused ? '#2E4E3F' : '#FFFFFF')};
  border: 1px;
//   borderColor: #D9E4D4;
  borderColor: ${props => (props.isFocused ? '#D9E4D4' : 'transparent')}
  padding: 12px;
  width: 133px;
  text-align: center;
  borderRadius: 25px;
  background-color: ${props => (props.isFocused ? 'white' : 'transparent')};
`;

export default function CalendarTabBar({
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
