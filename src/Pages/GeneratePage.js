import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import {getPhase1, getPhase2} from '../Components/GenerateQuestions';

// timer component

export default class questionPage extends Component {
    render() {
        return(
            <div>
                {/* state to determine phase 1 or phase 2 or phase 3 (redux) */}
                {/* manually call functions exported from generate questions after determining phase  and populate*/}
                {/* logic to tally stuff */}
            </div>
        )
    }
}