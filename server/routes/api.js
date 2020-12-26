const express = require('express');
const router = express.Router();

// TODO: figure out how to do models with multiple dbs

// prevent giving the same question
var easyQuestionsSeen = []
var medQuestionsSeen = []
var advQuestionsSeen = []
var nativeQuestionsSeen = []

// TODO: error handling

router.get('/set-questions/easy', (req, res) => {
    try {
        db.aggregate([{$sample: {size: 10}}]);
        // find 10 random questions
        // check against our current seenQuestions and replace the ones that are seen
        console.log(easyQuestionsSeen)
        res.sendStatus(200).json(easyQs)
    } catch(err) {
        res.sendStatus(500)
        console.log(err)
    }
})

router.get('/stockcarlist', async (req, res) => {
    try {
        const stockcarlist = await stockCar.find().lean();
        stockcarlist.map(car => {
            car.price = (car.price/getPrice(car.currency) + car.duties).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        })
        res.status(200).json(stockcarlist)
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
