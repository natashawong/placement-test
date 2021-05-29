import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import { withRouter } from 'react-router-dom';

import QuestionBlock from './QuestionBlock/QuestionBlock'
import checkAns from '../utils/CheckAns';
import { DIFFICULTY } from '../utils/Difficulty';

import { connect } from 'react-redux';

const _ = require("lodash");
const axios = require("axios");

/**
Phase 1: 
- 4 x EasyQs
- 4 x MedQs
- 4 x AdvQs

calc score...

Phase 2:
- 12 x scoreQs 
OR
- 6 x scoreQsA + 6 x scoreQsB

calc score...

Phase 3:
- repeat phase 2 over and over again until time runs out
**/

export const getPhase1 = () => {
    const qAndA = {questions: [], answerKey: []} // TODO: update totals here? elsewhere? probably elsewhere
    // pull questions for phase 1
    axios.get('http://localhost:9000/set-questions/phase1')
    .then(resp => {
        qAndA[0] = resp.data;
        qAndA[1] = resp.data.map(obj => obj.answer);
    })
    return qAndA
}

export const getPhase2 = (difficulty1, difficulty2 = "") => {
    const qAndA = {questions: [], answers: []}
    // pull questions from individual difficulties for phase 2

    if (difficulty2 !== "") {
        axios.get('http://localhost:9000/set-questions/' + difficulty1)
        // TODO: set number of questions called
        .then(resp => {
            qAndA[0] = resp.data;
            qAndA[1] = resp.data.map(obj => obj.answer);
        })

    // if student is caught between two difficulty levels, give half of each
    } else {
        // TODO: set number of questions called to half
        axios.get('http://localhost:9000/set-questions/' + difficulty1)
        .then(resp => {
            qAndA[0] = resp.data;
            qAndA[1] = resp.data.map(obj => obj.answer);
        })
        // TODO: set number of questions called to half
        axios.get('http://localhost:9000/set-questions/' + difficulty2)
        .then(resp => {
            qAndA[0].push(resp.data);
            qAndA[1].push(resp.data.map(obj => obj.answer));
        })
    }
    // TODO: make sure the push stuff works
    return qAndA
}

/**
export class GenerateQuestions extends Component {
    constructor(props) {
        super(props);
        this.state={
            questions: [],
            answerKey: [],
            currPhase: 1,
            // maybe don't need questionNumbering
            questionNumbering: 0,
            // TODO: I updated the results schema, so edit it elsewhere too!!
            testResults: {
                easyCorrect: 0,
                easyTotal: 0,
                mediumCorrect: 0,
                mediumTotal: 0,
                advanceCorrect: 0,
                advanceTotal: 0,
                score: 0,
                result: ""
            }
        };
    }
}
**/
