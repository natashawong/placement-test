import React, {Component} from 'react';
import { Formik, Form } from 'formik';

import QuestionBlock from '../Components/QuestionBlock/QuestionBlock'
import checkAns from '../utils/CheckAns';
import { DIFFICULTY } from '../utils/Difficulty';

import { connect } from 'react-redux';

const _ = require("lodash");

export class GeneratePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            questions: [],
            answerKey: [],
            currDifficulty: DIFFICULTY.EASY,
            questionNumbering: 0,
            pageNum: 1,
            testResults: {
                easyCorrect: 0,
                easyTotal: 0,
                mediumCorrect: 0,
                mediumTotal: 0,
                advancedCorrect: 0,
                advancedTotal: 0,
                nativeCorrect: 0,
                nativeTotal: 0,
                result: "",
            }
        };
    }

    componentDidMount() {
        // add an extra /traditional or /simplified to get specifically trad or simp API questions + answers
        this.setQuestions('https://api.mocki.io/v1/3e21d9f7'); //  + "/" + this.props.langSettings + "/" + this.state.currDifficulty
    }

    setQuestions(url) {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let result = data.map(obj => obj.answer);
            let tempUpdate = {...this.state.testResults}
            let currTotal = _.get(tempUpdate, this.state.currDifficulty + "Total");
            _.set(tempUpdate, this.state.currDifficulty + "Total", currTotal + 10); // TODO: change if we're not dispensing 10 qs at a time
            this.setState({
                questions: data,
                answerKey: result,
                testResults: tempUpdate,
            });
        })
    }

    finalSubmit() {
        const finalResults = [];
        finalResults.push(this.props.userData);
        finalResults.push(this.state.testResults);
        // post data to db
        
        // directly move to end page
    }

    render() {
        const initialValues = {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: "",
        };

        const langSettings = Object.values(this.props.langSettings)[0] // original: "{data: "simplified"}" => formatted to array and then getting the string: "simplified"

        return(
            <Formik 
                initialValues={initialValues} 
                onSubmit={(values, actions) => {
                    alert(JSON.stringify(values, null, 4));
                    // TODO: one more function for finalSubmit to post all the data to the db

                    const userAns = Object.values(values)
                    const result = checkAns(userAns, this.state.answerKey, this.state.currDifficulty)

                    const nextDifficulty = result[0]; // difficulty for next page
                    const score = result[1]; // score of current page

                    let tempUpdate = {...this.state.testResults}
                    const currScore = _.get(tempUpdate, this.state.currDifficulty + "Correct")
                    _.set(tempUpdate, this.state.currDifficulty + "Correct", currScore + score)

                    // update new difficulty, test score results, and page and question numbering
                    this.setState({
                        currDifficulty: nextDifficulty,
                        testResults: tempUpdate,
                        pageNum: this.state.pageNum + 1,
                        questionNumbering: this.state.questionNumbering + 10
                    })

                    actions.resetForm();

                    // url has to pull advanced or medium accordingly (append to url)
                    // this.setQuestions("https://api.mocki.io/v1/1cfba4e9"); //  + "/" + this.props.langSettings + "/" + this.state.currDifficulty

                }}
            >
                <Form>
                    <h3>Page {this.state.pageNum} of 4</h3>
                    {this.state.questions.map((question, i) =>
                        <QuestionBlock
                            key={i}
                            numbering={this.state.questionNumbering + i + 1}
                            prompt={_.get(question, ["prompt_" + langSettings])}
                            options={question.options}
                            questionNumber={i+1}
                            langSettings={langSettings}
                        /> 
                    )}
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        )
    }
}

const mapStateToProps = state => ({
    langSettings: state.langSettings,
    userData: state.userData,
});

export default connect(mapStateToProps)(GeneratePage)