import LectureColor from '../../assets/data/LectureColor.json'

const GetColor = (LecId : Number) => {
    const keys = Object.keys(LectureColor)
    const colors = Object.values(LectureColor)
    var idx = 0
    var key = 0;
    keys.map((item)=>{
        if(Number(item) == LecId) key = idx
        idx++
    })
    return colors[key]
}

export default GetColor;