const express = require('express');
const router = express.Router();

const easyQuestionModel = require('../models/questionSchema').easyQuestions;
const mediumQuestionModel = require('../models/questionSchema').mediumQuestions;
const advanceQuestionModel = require('../models/questionSchema').advanceQuestions;

const studentModel = require('../models/studentSchema');

/**
 * GET QUESTIONS ROUTES
 * 
 */


// TODO: error handling AND loading screen while questions are coming up

async function getRandomQuestions(model, questionsSeen, numberOfQuestions = 3) { // TODO: change this to 4 once I fix mongo test Qs
    const count = await model.countDocuments().lean();
    const questions = await Promise.all([...new Array(numberOfQuestions)].map(() => {
        var rand = Math.floor(Math.random() * Math.floor(count));
        while (questionsSeen.includes(rand)) {
            rand = Math.floor(Math.random() * Math.floor(count));
        }
        questionsSeen.push(rand);
        return model.findOne().skip(rand).lean().exec();
    }));
    return questions;
}

router.get('/set-questions/easy', async (req, res) => {
    try {
        if (!req.session.easyQuestionsSeen) {req.session.easyQuestionsSeen = []};
        const currQs = await getRandomQuestions(easyQuestionModel, req.session.easyQuestionsSeen);
        res.send(currQs);
    } catch(err) {
        res.sendStatus(500)
        console.log(err)
    }
})

router.get('/set-questions/medium', async (req, res) => {
    try {
        if (!req.session.medQuestionsSeen) {req.session.medQuestionsSeen = []};
        const currQs = await getRandomQuestions(mediumQuestionModel, req.session.medQuestionsSeen)
        res.send(currQs)
    } catch(err) {
        res.sendStatus(500)
        console.log(err)
    }
})

router.get('/set-questions/advance', async (req, res) => {
    try {
        if (!req.session.advQuestionsSeen) {req.session.advQuestionsSeen = []};
        const currQs = await getRandomQuestions(advanceQuestionModel, req.session.advQuestionsSeen)
        res.send(currQs)
    } catch(err) {
        res.sendStatus(500)
        console.log(err)
    }
})

// set questions for phase 1
router.get('/set-questions/phase1', async (req, res) => {
    try {
        if (!req.session.easyQuestionsSeen) {req.session.easyQuestionsSeen = []};
        if (!req.session.medQuestionsSeen) {req.session.medQuestionsSeen = []};
        if (!req.session.advQuestionsSeen) {req.session.advQuestionsSeen = []};
        const currQs = [];
        currQs.push(await getRandomQuestions(easyQuestionModel, req.session.easyQuestionsSeen));
        currQs.push(await getRandomQuestions(mediumQuestionModel, req.session.medQuestionsSeen));
        currQs.push(await getRandomQuestions(advanceQuestionModel, req.session.advQuestionsSeen));
        // TODO: the order is currently [{}], [{}], [{}] which I think will pose a problem... to fix maybe. javascript flattening things.
        res.send(currQs);
    } catch(err) {
        res.sendStatus(500);
        console.log(err);
    }
})

/**
 * POST STUDENT DATA ROUTES
 * 
 */

 router.post('/submit', async (req, res) => {
     console.log("req body" + req.body)
     const studentInfo = new studentModel({
        Name: req.body.Name,
        School: req.body.School,
        Email: req.body.Email,
        NativeSpeaker: req.body.NativeSpeaker,
        HeritageLearner: req.body.HeritageLearner,
        LangSettings: req.body.LangSettings,
        Results: req.body.Results,
     })
     try {
         const newStudentInfo = await studentInfo.save()
         res.send(newStudentInfo)
     } catch(err) {
         res.sendStatus(500)
         console.log(err)
     }
 })

module.exports = router;
