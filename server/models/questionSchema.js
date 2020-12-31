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
module.exports = questions_db_conn.model('easy_question', mongoose.Schema(questionSchema));