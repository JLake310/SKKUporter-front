import React, {useEffect, useState} from 'react'
import {SafeAreaView, Text, Button, View, ScrollView } from 'react-native'
import styled from 'styled-components';
import LectureData from '../../assets/data/data.json'
import GetColor from './GetColor';

export default function WeekCalendar() {
    var now = new Date();
    let day = now.getDay();
    let week: number[] = [0,0,0,0,0,0,0]

    const [DateValue, setCount] = useState<number>(now.valueOf())
    const [Week, setWeek] = useState(week)
    const [year, setYear] = useState<number>(now.getFullYear())
    const [month, setMonth] = useState<number>(now.getMonth())
    const [weekStart, setweekStart] = useState<number>(DateValue + 86400000 * (-day))
    const [weekEnd, setweekEnd] = useState<number>(DateValue + 86400000 * (6-day))

    const GetLectures = LectureData.Lectures.map((item)=>{
        if(item.thingsToDo?.lecture?.length != 0){
            var display = false;
            item.thingsToDo.lecture.map((item2) => {
                var due = new Date(item2.dueDate).valueOf();
                if(weekStart <= due && due < weekEnd){
                    display = true;
                }
            })
            if(display){
                return(
                    <LectureBox key={item.id} style={{ flexDirection: 'row' }}>
                        <Dot style={{ borderColor: GetColor(Number(item.id)) }}></Dot>
                        <LectureText>
                            {item.name}_{item.classNum}({item.prof})
                        </LectureText>
                    </LectureBox>
                )
            }
        }
    })

    const GetAssignments = LectureData.Lectures.map((item)=>{
        if(item.thingsToDo?.assignment.length != 0){
            var display = false;
            item.thingsToDo.assignment.map((item2) => {
                var due = new Date(item2.dueDate).valueOf()
                if(weekStart <= due && due <= weekEnd){
                    display = true;
                }
            })
            if(display){
                return(
                    <LectureBox key={item.id} style={{ flexDirection: 'row' }}>
                        <Dot key={item.classNum} style={{ borderColor: GetColor(Number(item.id)) }}></Dot>
                        <LectureText key={item.name}>
                            {item.name}_{item.classNum}({item.prof})
                        </LectureText>
                    </LectureBox>
                )
            }
        }
    })

    const MakeWeekArr = () => {
        for(let i=0;i<7;i++){
            let newDate = new Date(DateValue + 86400000 * (i - day));
            week[i] = newDate.getDate()
        }
    }

    const Rerender = (curWeek : number[]) => {
        return(
            <ScrollView style={{width:'100%'}}>
                <Title>Lectures</Title>
                <Line />
                {GetLectures}

                <Title>Assignments</Title>
                <Line />
                {GetAssignments}
            </ScrollView>
        )
    }
    
    // week array initialize
    MakeWeekArr();

    const increase = () => {
        setCount(DateValue + 86400000 * 7)
        setweekStart(weekStart + 86400000 * 7)
        setweekEnd(weekEnd + 86400000 * 7)
    }
    const decrease = () => {
        setCount(DateValue - 86400000 * 7)
        setweekStart(weekStart - 86400000 * 7)
        setweekEnd(weekEnd - 86400000 * 7)
    }
    
    // Update when button pushed
    useEffect(()=>{
        let newDate = new Date(DateValue)
        MakeWeekArr();
        setWeek(week)
        setYear(newDate.getFullYear())
        setMonth(newDate.getMonth() + 1)
    }, [DateValue])
    
    return(
        <SafeAreaView style={{ margin:'5%' , justifyContent:'space-evenly', alignItems:'center'}}>
            <WeekHeader style={{flexDirection: 'row'}}>
                <Button title={'<'} onPress={decrease} color='#2E4E3F'/>    
                <WeekText>{year}.{month}</WeekText>
                <Button title={'>'} onPress={increase} color='#2E4E3F'/>
            </WeekHeader>
            <WeekContainer style={{flexDirection: 'row'}}>
                <DateHeader>Sun</DateHeader>
                <DateHeader>Mon</DateHeader>
                <DateHeader>Tue</DateHeader>
                <DateHeader>Wed</DateHeader>
                <DateHeader>Thu</DateHeader>
                <DateHeader>Fri</DateHeader>
                <DateHeader>Sat</DateHeader>
            </WeekContainer>
            <WeekContainer style={{flexDirection: 'row'}}>
                {Week.map((day)=>{
                    return(<DateText key={day}>{day}</DateText>)
                })}
            </WeekContainer>
            {Rerender(Week)}
        </SafeAreaView>
    )
}

const WeekContainer = styled(View)`
    margin-bottom: 10px;
`;

const WeekHeader = styled(View)`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const WeekText = styled(Text)`
    flex: 1;
    text-align: center;
    font-size: 18px;
`;

const DateText = styled(Text)`
    flex:1;
    text-align: center;
`;

const DateHeader = styled(Text)`
    flex:1;
    text-align: center;
    fontWeight: bold;
`;

const LectureBox = styled(View)`
    // flex: 1;
    height: 40px;
    width: 100%;
    // margin-left: 5%;
    margin-bottom: 5px;
    // justify-content: center;
    align-items: center;
    border: 1px;
    borderRadius: 5px;
    borderColor: #d9e4d4;
    padding-right: 5%;
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

const CenterSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
`;

const Title = styled(Text)`
    borderbottomwidth: 2px;
    bordercolor: #8eaf81;
    margin: 5px 2px;
    fontsize: 15px;
    padding: 10px 0px;
`;

const Line = styled(View)`
    width: 100%;
    border: 0.7px solid;
    borderColor : #8EAF81;
    marginBottom: 5px;
`;