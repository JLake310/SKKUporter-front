import { StackNavigationProp } from '@react-navigation/stack';
import React, {useState} from 'react';
import { Image, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { palette } from '../styles/palette';
import { RootStackParamList } from '../types/RootStackParamList';

type SettingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Setting'
>;

type Props = {
    navigation: SettingScreenNavigationProp;
};

const SettingScreen = (props: Props) => {
    const { navigation } = props;
    const [seeUserInfo, setSeeUserInfo] = useState(false);
    const [seeLogout, setSeeLogout] = useState(false);

    return (
        <CenterSafeAreaView>
            <Header>
                <Logo source={require('../assets/images/banner.png')} />
                <View style={{display:'flex', flexDirection:'row'}}>
                    <IconButton onPress={()=>setSeeUserInfo(true)}>
                        <Image 
                            source={require('../assets/icons/user.png')} 
                            style={{
                                width: 26, 
                                height: 26
                            }}    
                        />
                    </IconButton>  
                </View>
            </Header>
            <Title>
                <TitleText>Settings</TitleText>
            </Title>
            <Box>
                <Icon source={require("../assets/icons/announcement.png")} />
                <Text1>공지사항</Text1>
            </Box>
            <Box>
                <Icon source={require("../assets/icons/notification.png")} />
                <Text1>알림 설정</Text1>
            </Box>
            <Box>
                <Icon source={require("../assets/icons/policy.png")} />
                <Text1>약관 및 정책</Text1>
            </Box>
            <Box>
                <Icon source={require("../assets/icons/policy.png")} />
                <Text1>법률 정보</Text1>
            </Box>
            <Box>
                <Icon source={require("../assets/icons/logout.png")} />
                <Text1>로그아웃</Text1>
            </Box>
            {
                seeUserInfo ? (
                    <UserInfoBox style={{position: 'absolute'}}>
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
                        <Text style={{marginTop: 20}}>로그아웃 하시겠습니까?</Text>
                        <View
                            style={{
                                width: "100%",
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 20,
                                borderTopColor: "black",
                                borderTopWidth: 1,
                            }}
                        >
                            <TouchableOpacity 
                                style={{
                                    width: "50%", 
                                    alignItems:'center', 
                                    justifyContent: 'center',
                                    borderRightColor: "black",
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
                                    setSeeUserInfo(false)
                                }}
                            >
                                <Text>아니오</Text>
                            </TouchableOpacity>
                        </View>
                    </LogoutBox>
                ): null
            }
        </CenterSafeAreaView>
        
    );
};
const CenterSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    background-color: white;
`;

const Header = styled(SafeAreaView)`
    width: 100%;
    background-color: ${palette.BASIC};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Logo = styled(Image)`
    width: 150px;
    height: 48.6px;
    margin-left: 6px;
    margin-top: 8px;
`;
const IconButton = styled(TouchableOpacity)`
    width: 50px;
    align-items: center;
    margin-top: 20px;
    margin-right: 5px;
`;
const Title = styled(View)`
    margin-top: 10px;
    margin-bottom: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #2e4e3f;
    width: 100%;
`;
const TitleText = styled(Text)`
    font-size: 25px;
    margin-left: 10px;
    color: #2e4e3f;
    font-weight: bold;
`;
const Box = styled(TouchableOpacity)`
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-color: darkgray;
    border-width: 1px;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    margin-bottom: 15px;
`;
const Icon = styled(Image)`
    width: 20px;
    height: 20px
`;
const Text1 = styled(Text)`
    color: black;
    font-weight: 400;
    margin-left: 10px;
`;
const UserInfoBox = styled(View)`
    width: 100%;
    background-color: white;
    align-items: center;
    border-bottom-color: darkgray;
    border-bottom-width: 1px;
`;

const LogoutBox = styled(View)`
    width: 60%;
    position: absolute;
    top: 40%;
    left: 20%;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 10px;
    border-color: black;
    border-width: 1px;
`;
export default SettingScreen;
