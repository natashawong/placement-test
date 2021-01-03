const mongoose = require('mongoose')

// TODO: edit the schema later as I edit the form

const studentSchema = new mongoose.Schema({
    Name: String,
    School: String,
    Email: String,
    Nationality: String,
    NativeSpeaker: String,
    PrevChineseEducation: String,
    RecentYrChineseEd: 0,
    IntensityOfInstruction: 0,
    NumCharactersRead: String,
    NumCharactersWritten: String,
    HeritageLearner: String,
    FluentWOFormal: String,
    FluentWOWriting: String,
    ChineseAtHome: String,
    ChineseWFriends: String,
    Other: String,
    Classical: String,
    StudyAbroad: String,
    LengthOfStudyAbroad: 0,
    Topics_Family_Dates_Hobby_Sports_Money: String,
    Topics_Weather_Direction_Doctor_Apt_Travel: String,
    Topics_Internet_Education_Jobs_Course_Geo: String,
    Topics_Uni_ChineseReligion_Customs_Gender_Env: String,
    Topics_LiteraryWorks_Hist_Economy: String,
    OtherInfo: String,
    LangSettings: String,
    Results: [
        {
            advanceCorrect: Number,
            advanceTotal: Number,
            easyCorrect: Number,
            easyTotal: Number,
            mediumCorrect: Number,
            mediumTotal: Number,
            nativeCorrect: Number,
            nativeTotal: Number,
            result: String,
        }
    ]
})


const students_db_conn = mongoose.createConnection(process.env.STUDENTS_DB, {useNewUrlParser: true});
module.exports = students_db_conn.model('student', mongoose.Schema(studentSchema));