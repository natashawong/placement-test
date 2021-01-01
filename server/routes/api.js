const express = require('express');
const router = express.Router();

const easyQuestionModel = require('../models/questionSchema').easyQuestions;
const mediumQuestionModel = require('../models/questionSchema').mediumQuestions;
const advanceQuestionModel = require('../models/questionSchema').advanceQuestions;
const nativeQuestionModel = require('../models/questionSchema').nativeQuestions;

const studentModel = require('../models/studentSchema');

/**
 * GET QUESTIONS ROUTES
 * 
 */

var easyQuestionsSeen = []
var medQuestionsSeen = []
var advQuestionsSeen = []
var nativeQuestionsSeen = []

// TODO: error handling AND loading screen while questions are coming up

async function getRandomQuestions(model, questionsSeen) {
    const count = await model.countDocuments();
    const questions = await Promise.all([...new Array(3)].map(() => { // TODO: change to 10 later
        var rand = Math.floor(Math.random() * Math.floor(count));
        while (questionsSeen.includes(rand)) {
            rand = Math.floor(Math.random() * Math.floor(count));
        }
        questionsSeen.push(rand);
        return model.findOne().skip(rand).exec();
    }));
    return questions;
}

router.get('/set-questions/easy', async (req, res) => {
    try {
        const currQs = await getRandomQuestions(easyQuestionModel, easyQuestionsSeen)
        res.send(currQs)
    } catch(err) {
        res.sendStatus(500)
        console.log(err)
    }
})

router.get('/set-questions/medium', async (req, res) => {
    try {
        const currQs = await getRandomQuestions(mediumQuestionModel, medQuestionsSeen)
        res.send(currQs)
    } catch(err) {
        res.sendStatus(500)
        console.log(err)
    }
})

router.get('/set-questions/advance', async (req, res) => {
    try {
        const currQs = await getRandomQuestions(advanceQuestionModel, advQuestionsSeen)
        res.send(currQs)
    } catch(err) {
        res.sendStatus(500)
        console.log(err)
    }
})

router.get('/set-questions/native', async (req, res) => {
    try {
        const currQs = await getRandomQuestions(nativeQuestionModel, nativeQuestionsSeen)
        res.send(currQs)
    } catch(err) {
        res.sendStatus(500)
        console.log(err)
    }
})

/**
 * POST STUDENT DATA ROUTES
 * 
 */

 router.post('/submit', (req, res) => {
     try {
         
     } catch(err) {
         res.sendStatus(500)
         console.log(err)
     }
 })

module.exports = router;
