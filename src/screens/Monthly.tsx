import React, { Component } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    FlatList,
    TimePickerAndroid,
} from 'react-native';
import styled from 'styled-components';
import { Calendar } from 'react-native-calendars';
import LectureData from '../assets/data/data.json'
import ColorData from '../assets/data/LectureColor.json'
import GetColor from '../components/Todo/GetColor';

const GetMarkList = () => {
    const arr = Object.values(ColorData)
    console.log(arr)
    const Lectures = LectureData.Lectures
    const LecArr: any[]=[]
    var LecCnt = Lectures.length;
    for(let idx=0; idx<LecCnt; idx++){
        var LecId = Number(Lectures[idx].id)
        LecArr[LecId] = {key:(LecId).toString(), color:GetColor(LecId)}
    }
    
    const MarkListArr: { [x: string]: { dots: never[]; } | { dots: never[]; }; }[] = []

    Lectures.map((item)=>{
        item.thingsToDo.lecture.map((items)=>{
            var due = items.dueDate
            due = due.substring(0, due.indexOf('T'))
            MarkListArr.push({[due]:{dots:[]}})
        })
        item.thingsToDo.assignment.map((items)=>{
            var due = items.dueDate
            due = due.substring(0, due.indexOf('T'))
            MarkListArr.push({[due]:{dots:[]}})
        })
    })

    const MarkList = Object.assign({}, ...MarkListArr)

    Lectures.map((item)=>{
        item.thingsToDo.lecture.map((items) => {
            var due = items.dueDate
            due = due.substring(0, due.indexOf('T'))

            if(!MarkList[due].dots.includes(LecArr[Number(item.id)])){
                MarkList[due].dots.push(LecArr[Number(item.id)])
            }
        })
        item.thingsToDo.assignment.map((items) => {
            var due = items.dueDate
            due = due.substring(0, due.indexOf('T'))

            if(!MarkList[due].dots.includes(LecArr[Number(item.id)])){
                MarkList[due].dots.push(LecArr[Number(item.id)])
            }
        })
    })

    return MarkList;
}
var key = 0;
const MonthlyScreen = () => {
    let Lectures = LectureData.Lectures;
    return (
        <CenterSafeAreaView>
            <Calendar
                markingType={'multi-dot'}
                markedDates={GetMarkList()}
                style={{
                    borderColor: 'black',
                }}
                theme={{
                    selectedDayBackgroundColor: '#2E4E3F',
                    selectedDayTextColor: 'white',
                    arrowColor: '#2E4E3F',
                }}></Calendar>
            <ListText>&lt; Lecture List &gt;</ListText>
            <LectureList>
                {Lectures.map((item)=>{
                    return(
                        <LectureBox key={key++} style={{flexDirection:'row'}}>
                            <Dot key={key++} style={{ borderColor: GetColor(Number(item.id)) }}></Dot>
                            <LectureText key={key++}>
                                {item.name}_{item.classNum}({item.prof})
                            </LectureText>
                        </LectureBox>
                    )
                })}
            </LectureList>
        </CenterSafeAreaView>
    );
};

const CenterSafeAreaView = styled(View)`
    flex: 1;
    // justify-content: center;
    // align-items: center;
    background-color: #ffffff;
`;

const ListText = styled(Text)`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const LectureList = styled(ScrollView)`
    flex: 1;
`;

const LectureBox = styled(View)`
    flex: 1;
    height: 40px;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 5px;
    // justify-content: center;
    align-items: center;
    border: 1px;
    borderRadius: 5px;
    borderColor: #d9e4d4;
    padding-right: 5px;
`;

const LectureText = styled(Text)`
    margin-left: 10px;
    // flex:1;
`;

const Dot = styled(View)`
    width: 8px;
    height: 8px;
    borderRadius: 4px;
    border: 4px;
    margin-left: 10px;
    // flex:1;
`;
export default MonthlyScreen;
