const express = require('express');
const router = express.Router();

const questionModel = require('../models/questionSchema');
const studentModel = require('../models/studentSchema');

// TODO: figure out how to do models with multiple dbs

var easyQuestionsSeen = []
var medQuestionsSeen = []
var advQuestionsSeen = []
var nativeQuestionsSeen = []

// TODO: error handling

router.get('/set-questions/easy', async (req, res) => {
    try {
        const currQs = await questionModel.find({});
        // for (q in currQs) {
        //     if (easyQuestionsSeen.contains(q)) {
        //         // find replacement = db.aggregate([{$sample: {size: 1}}]);
        //         easyQuestionsSeen.push(replacement.ID);
        //     } // pseudocode, make sure to change
        // }
        // console.log(easyQuestionsSeen)
        // res.sendStatus(200).json(easyQs)
        console.log(currQs)
        res.send(currQs)
    } catch(err) {
        res.sendStatus(500)
        console.log(err)
    }
})

router.get('/set-questions/medium', (req, res) => {
    // get questions
    console.log(medQuestionsSeen);
})

router.get('/set-questions/advance', (req, res) => {
    // get questions
    console.log(advQuestionsSeen);
})

router.get('/set-questions/native', (req, res) => {
    // get questions
    console.log(nativeQuestionsSeen);
})

module.exports = router;
