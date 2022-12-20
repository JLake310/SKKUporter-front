import React, {useState} from 'react';
import {
    SafeAreaView,
    Text,
    useWindowDimensions,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';
import styled from 'styled-components';
import LectureData from '../assets/data/data.json'
import GetColor from '../components/Todo/GetColor';

const LectureScreen = () => {
    const { width } = useWindowDimensions();
    return (
        <CenterSafeAreaView>
            {/* <View style={{width:"100%", marginTop:10, borderBottomColor:"darkgreen", borderBottomWidth:1}}>
                <Text style={{fontSize:25, marginLeft:10, fontWeight:"bold",color:"darkgreen"}}>
                    Lectures
                </Text>
            </View> */}
            <Title>
                <TitleText>Lectures</TitleText>
            </Title>
            <View style={{ alignItems: 'center', width: '95%', marginBottom:50 }}>
                <FlatList
                    data={LectureData.Lectures}
                    renderItem={({ item }) => (
                        <LectureBox
                            style={{
                                width: width * 0.475,
                                height: width * 0.45,
                            }}>
                            <View
                                style={{
                                    width: '100%',
                                    alignItems: 'center',
                                    borderRadius: 12,
                                    borderColor: 'darkgray',
                                    borderWidth: 1,
                                    flexDirection:'column',
                                    height: '90%'
                                }}>
                                <Text style={{ margin: 10, color: 'black', height: '20%', textAlignVertical:'center'}}>
                                    {item.name}
                                </Text>
                                <LectureColor
                                    style={{
                                        backgroundColor: GetColor(item.id),
                                    }}></LectureColor>
                                <Text style={{ margin: 10, }}>
                                    {item.classNum}
                                </Text>
                            </View>
                        </LectureBox>
                    )}
                    numColumns={2}
                    keyExtractor={item => '' + item.id}
                    style={{ marginTop: 7 }}
                />
            </View>
        </CenterSafeAreaView>
    );
};

const CenterSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    background-color: white;
`;

const LectureBox = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 1px;
`;


const LectureColor = styled(View)`
    width: 100%;
    height: 40%;
    background-color: red;
`;

const Title = styled(View)`
    margin-top: 10px;
    border-bottom-width: 1px;
    border-bottom-color: #2e4e3f;
    width: 100%;
    margin-top: 10px;
`;

const TitleText = styled(Text)`
    font-size: 25px;
    margin-left: 10px;
    color: #2e4e3f;
    font-weight: bold;
`;


export default LectureScreen;
