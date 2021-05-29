const mongoose = require('mongoose')

// TODO: edit the schema later as I edit the form

const studentSchema = new mongoose.Schema({
    Name: String,
    School: String,
    Email: String,
    NativeSpeaker: String,
    Beginner: String,
    HeritageLearner: String,
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