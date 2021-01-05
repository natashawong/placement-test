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
    const count = await model.countDocuments().lean();
    const questions = await Promise.all([...new Array(3)].map(() => { // TODO: change to 10 later
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
        const currQs = await getRandomQuestions(mediumQuestionModel, req.session.advQuestionsSeen)
        res.send(currQs)
    } catch(err) {
        res.sendStatus(500)
        console.log(err)
    }
})

router.get('/set-questions/native', async (req, res) => {
    try {
        if (!req.session.nativeQuestionsSeen) {req.session.nativeQuestionsSeen = []};
        const currQs = await getRandomQuestions(mediumQuestionModel, req.session.nativeQuestionsSeen)
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

 router.post('/submit', async (req, res) => {
     console.log("req body" + req.body)
     const studentInfo = new studentModel({
        Name: req.body.Name,
        School: req.body.School,
        Email: req.body.Email,
        Nationality: req.body.Nationality,
        NativeSpeaker: req.body.NativeSpeaker,
        PrevChineseEducation: req.body.PrevChineseEducation,
        RecentYrChineseEd: 0,
        IntensityOfInstruction: 0,
        NumCharactersRead: req.body.NumCharactersRead,
        NumCharactersWritten: req.body.NumCharactersWritten,
        HeritageLearner: req.body.HeritageLearner,
        FluentWOFormal: req.body.FluentWOFormal,
        FluentWOWriting: req.body.FluentWOWriting,
        ChineseAtHome: req.body.ChineseAtHome,
        ChineseWFriends: req.body.ChineseWFriends,
        Other: req.body.Other,
        Classical: req.body.Classical,
        StudyAbroad: req.body.StudyAbroad,
        LengthOfStudyAbroad: 0,
        Topics_Family_Dates_Hobby_Sports_Money: req.body.Topics_Family_Dates_Hobby_Sports_Money,
        Topics_Weather_Direction_Doctor_Apt_Travel: req.body.Topics_Weather_Direction_Doctor_Apt_Travel,
        Topics_Internet_Education_Jobs_Course_Geo: req.body.Topics_Internet_Education_Jobs_Course_Geo,
        Topics_Uni_ChineseReligion_Customs_Gender_Env: req.body.Topics_Uni_ChineseReligion_Customs_Gender_Env,
        Topics_LiteraryWorks_Hist_Economy: req.body.Topics_LiteraryWorks_Hist_Economy,
        OtherInfo: req.body.OtherInfo,
        LangSettings: req.body.LangSettings,
        Results: req.body.Results,
     })
     try {
         const newStudentInfo = await studentInfo.save()
         res.sendStatus(200).json(newStudentInfo)
     } catch(err) {
         res.sendStatus(500)
         console.log(err)
     }
 })

module.exports = router;
