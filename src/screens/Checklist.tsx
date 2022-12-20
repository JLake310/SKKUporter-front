import { View, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import styled from 'styled-components';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import LectureData from '../assets/data/data.json'
import GetColor from '../components/Todo/GetColor';

const Width = Dimensions.get('window').width;

const ChecklistScreen = () => {
    
    const GetLeftDay = (dueDate: string) => {

        var due = new Date(dueDate).valueOf()
        var cur = new Date().valueOf()
        
        var leftSec = parseInt(((due - cur)/1000).toString());

        if(leftSec < 0){
            return(<Text>마감</Text>)
        }
        
        var leftMin = parseInt((leftSec / 60).toString())
        var leftHour = parseInt((leftMin / 60).toString())

        if(leftHour < 24){
            return(<Text>{leftHour}시간 남음</Text>)
        }

        var leftDay = parseInt((leftHour / 24).toString())
        return(<Text>{leftDay}일 남음</Text>)
    }
    var key = 0;
    const GetThingsTodo = LectureData.Lectures.map((item)=>{
        if(item.thingsToDo.assignment.length > 0 || item.thingsToDo.lecture.length > 0)
        
        return(
            <LectureContainer key={key++}>
                <LectureBox key={key++} style={{ flexDirection: 'row' }}>
                    <Dot key={key++} style={{ borderColor: GetColor(Number(item.id)) }}></Dot>
                    <LectureText key={key++}>
                        {item.name}_{item.classNum}({item.prof})
                    </LectureText>
                </LectureBox>
                {item.thingsToDo?.lecture.map((items) => {
                    return(
                        <LectureInfo key={key++} style={{ flexDirection: 'row' }}>
                            <BouncyCheckbox
                                key = {key++}
                                size={20}
                                fillColor={GetColor(Number(item.id))}
                                unfillColor="#FFFFFF"
                                text={items.title}
                                iconStyle={{ borderColor: 'red' }}
                                onPress={(isChecked: boolean) => {}}
                                style={{ paddingLeft: 10, width: Width * 0.6 }}
                                textStyle={{fontSize: 13}}
                            />
                            {GetLeftDay(items.dueDate)}
                        </LectureInfo>
                        
                    );
                })}
                {item.thingsToDo?.assignment.map((items) =>{
                    return(
                        <LectureInfo key={key++} style={{ flexDirection: 'row' }}>
                            <BouncyCheckbox
                                key={key++}
                                size={20}
                                fillColor={GetColor(Number(item.id))}
                                unfillColor="#FFFFFF"
                                text={items.title}
                                iconStyle={{ borderColor: 'red' }}
                                onPress={(isChecked: boolean) => {}}
                                style={{ paddingLeft: 10, width: Width * 0.6, }}
                                textStyle={{fontSize: 13}}
                            />
                            {GetLeftDay(items.dueDate)}
                        </LectureInfo>
                    );
                })}
            </LectureContainer>
            
        )
    })

    return (
        <CenterSafeAreaView>
            <MainContainer>
                {GetThingsTodo}
                <TabBlock></TabBlock>
            </MainContainer>
        </CenterSafeAreaView>
        
        
    );
};

const CenterSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    // align-items: center;
    background-color: white;
`;


const MainContainer = styled(ScrollView)`
    background-color: #ffffff;
    flex: 1;
    padding-top: 20px;
`;

const LectureContainer = styled(View)`
    flex: 1;
    margin-bottom: 10px;
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
const LectureInfo = styled(View)`
    justify-content: space-between;
    padding: 0px 23px;
    margin-bottom: 10px;
`;

const TabBlock = styled(View)`
    height: 30px;
`;

export default ChecklistScreen;
