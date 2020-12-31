const express = require('express');
const router = express.Router();

const questionModel = require('../models/questionSchema');
const studentModel = require('../models/studentSchema');

var easyQuestionsSeen = []
var medQuestionsSeen = []
var advQuestionsSeen = []
var nativeQuestionsSeen = []

// TODO: error handling


// TODO: fix this to do what I want to do then I should be pretty good.
function getOneRandom() {
    // Get the count of all users
    questionModel.countDocuments().exec(function (err, count) {

        // Get a random entry
        var random = Math.floor(Math.random() * count)
    
        // Again query all users but only fetch one offset by our random #
        questionModel.findOne().skip(random).exec(
        function (err, result) {
            // Tada! random user
            console.log("random result" + result)
        })
    })
}

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
