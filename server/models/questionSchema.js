const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    prompt_simplified: String,
    prompt_traditional: String,
    options: [
        {
            letter: String,
            prompt_simplified: String,
            prompt_traditional: String,
        },
        {
            letter: String,
            prompt_simplified: String,
            prompt_traditional: String,
        },
        {
            letter: String,
            prompt_simplified: String,
            prompt_traditional: String,
        },
        {
            letter: String,
            prompt_simplified: String,
            prompt_traditional: String,
        }
    ],
    answer: String,
})

const questions_db_conn = mongoose.createConnection(process.env.QUESTIONS_DB, {useNewUrlParser: true});

const easyQuestions = questions_db_conn.model('easy_question', mongoose.Schema(questionSchema))
const mediumQuestions = questions_db_conn.model('medium_question', mongoose.Schema(questionSchema))
const advanceQuestions = questions_db_conn.model('advance_question', mongoose.Schema(questionSchema))
const nativeQuestions = questions_db_conn.model('native_question', mongoose.Schema(questionSchema))

module.exports = {
    easyQuestions: easyQuestions,
    mediumQuestions: mediumQuestions,
    advanceQuestions: advanceQuestions,
    nativeQuestions: nativeQuestions
}