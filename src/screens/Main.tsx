import React, {useState, PropsWithChildren} from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, SafeAreaView, View, TouchableOpacity, Text, Dimensions, Platform } from 'react-native';
import styled from 'styled-components';
import { RootStackParamList } from '../types/RootStackParamList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from './Todo';
import ChatScreen from './Chat';
import LectureScreen from './Lecture';
import { palette } from '../styles/palette';
import { MainTabParamList } from '../types/MainTabParamList';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

type Props = {
    navigation: MainScreenNavigationProp;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainScreen = (props: Props) => {
    const { navigation } = props;
    const [seeUserInfo, setSeeUserInfo] = useState(false);
    const [seeLogout, setSeeLogout] = useState(false);
    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;
    
    return (
        <>
            <Header>
                <Logo source={require('../assets/images/banner.png')} />
                <View style={{display:'flex', flexDirection:'row'}}>
                    <IconButton onPress={()=>setSeeUserInfo(true)}>
                        <Icon source={require('../assets/icons/user.png')} />
                    </IconButton>
                    <IconButton onPress={()=>navigation.navigate('Setting')}>
                        <Icon style={{marginRight:5}} source={require('../assets/icons/setting_on.png')} />
                    </IconButton>    
                </View>
            </Header>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: palette.DEEP_GREEN,
                }}
                defaultScreenOptions={{
                    tabBarLabelStyle: { color: palette.LIGHT_GREEN },
                }}>
                <Tab.Screen
                    name="Todo"
                    component={TodoScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Icon
                                    source={require('../assets/icons/calendar_on.png')}
                                />
                            ) : (
                                <Icon
                                    source={require('../assets/icons/calendar_off.png')}
                                />
                            ),
                    }}
                />
                <Tab.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Icon
                                    source={require('../assets/icons/chat_on.png')}
                                />
                            ) : (
                                <Icon
                                    source={require('../assets/icons/chat_off.png')}
                                />
                            ),
                    }}
                />
                <Tab.Screen
                    name="Lecture"
                    component={LectureScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Icon
                                    source={require('../assets/icons/lecture_on.png')}
                                />
                            ) : (
                                <Icon
                                    source={require('../assets/icons/lecture_off.png')}
                                />
                            ),
                    }}
                />

            </Tab.Navigator>
            {
                seeUserInfo ? (
                    <UserInfoBox style={{position: 'absolute'}}>
                        <View style={{position:'absolute' ,backgroundColor: 'rgba(0,0,0,0.4)', width: '100%', height: screenHeight, top:'100%'}}></View>
                        <TouchableOpacity 
                            style={{position: 'absolute', alignSelf: 'flex-end', right: 15, top: 10}}
                            onPress={()=>setSeeUserInfo(false)}
                        >
                            <Text>X</Text>
                        </TouchableOpacity>
                        <View style={{
                            padding: 10,
                            borderColor: "darkgray",
                            borderWidth: 1,
                            borderRadius: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 30
                        }}>
                            <Image 
                                source={require("../assets/icons/user.png")} 
                                style={{
                                    width: 60,
                                    height: 60,
                                }}
                            />
                        </View>
                        <Text
                            style={{
                                marginTop: 10,
                                fontWeight: '500'
                            }}
                        >이 름</Text>
                        <Text
                            style={{
                                marginTop: 5,
                                marginBottom: 10,
                                fontWeight: '700'
                            }}
                        >2022123456</Text>
                        <View
                            style={{
                                width: "100%",
                                borderTopColor: "darkgray",
                                borderTopWidth: 1,
                                alignItems: 'center'
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    paddingTop: 15,
                                    paddingBottom: 15
                                }}
                                onPress={()=>setSeeLogout(true)}
                            >
                                <Image 
                                    source={require("../assets/icons/logout.png")} 
                                    style={{
                                        width: 15,
                                        height: 15,
                                        marginTop: 2
                                    }}    
                                />
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        fontWeight: '700',
                                    }}
                                >로그아웃</Text>
                            </TouchableOpacity>
                        </View>
                    </UserInfoBox>
                ): null

            }
            {
                seeLogout ? (
                    <LogoutBox>
                        <Text style={{marginTop: 20 }}>로그아웃 하시겠습니까?</Text>
                        <View
                            style={{
                                width: "100%",
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 20,
                                borderTopColor: "#2E4E3F",
                                borderTopWidth: 1,
                            }}
                        >
                            <TouchableOpacity 
                                style={{
                                    width: "50%", 
                                    alignItems:'center', 
                                    justifyContent: 'center',
                                    borderRightColor: "#2E4E3F",
                                    borderRightWidth: 1,
                                    paddingTop: 10,
                                    paddingBottom: 10
                                }}
                                onPress={()=>{
                                    setSeeLogout(false)
                                    setSeeUserInfo(false)
                                }}
                            >
                                <Text>네</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{
                                    width: "50%", 
                                    alignItems:'center', 
                                    justifyContent: 'center'
                                }}
                                onPress={()=>{
                                    setSeeLogout(false)
                                    // setSeeUserInfo(false)
                                }}
                            >
                                <Text>아니오</Text>
                            </TouchableOpacity>
                        </View>
                    </LogoutBox>
                ): null
            }
        </>
    );
};

const Header = styled(SafeAreaView)`
    height: 70px;
    background-color: ${palette.BASIC};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const IconButton = styled(TouchableOpacity)`
    width: 50px;
    align-items: center;
    margin-top: 20px;
`;

const Logo = styled(Image)`
    width: 150px;
    height: 48.6px;
    margin-left: 6px;
    margin-top: 8px;
`;

const Icon = styled(Image)`
    width: 26px;
    height: 26px;
`;

const UserInfoBox = styled(View)`
    width: 100%;
    background-color: white;
    align-items: center;
    // border-bottom-color: darkgray;
    // border-bottom-width: 1px;
`;

const LogoutBox = styled(View)`
    width: 60%;
    position: absolute;
    top: 40%;
    left: 20%;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    // border-color: black;
    // border-width: 1px;
    ${
        Platform.select({
            ios:{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.30,
            },
            android:{
                elevation: 13,
            },
        })
    }
`;

export default MainScreen;
