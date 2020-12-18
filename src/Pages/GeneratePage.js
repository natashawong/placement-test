import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import QuestionBlock from '../Components/QuestionBlock/QuestionBlock'
import checkAns from '../utils/CheckAns';

export default class GeneratePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            questions: [],
            answerKey: [],
            questionNumbering: 0,
            pageNum: 1,
        };
    }

    setQuestions(url) {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let result = data.map(obj => obj.answer);
            this.setState({
                questions: data,
                answerKey: result
            });
        })
    }

    componentDidMount() {
        // add an extra /traditional or /simplified to get specifically trad or simp API questions + answers
        this.setQuestions('https://api.mocki.io/v1/34eee778'); //  + "/" + this.props.langSettings + "/" + "easy"
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

        return(
            <Formik 
                initialValues={initialValues} 
                onSubmit={(values, actions) => {
                    alert(JSON.stringify(values, null, 4));
                    // one more function for finalSubmit to post all the data to the db

                    // util function to calc: num correct and append to a user data state
                    const userAns = Object.values(values)
                    const result = checkAns(userAns, this.state.answerKey) // const result = .... and then do smth
                    actions.resetForm();

                    // url has to pull advanced or medium accordingly (append to url)
                    this.setQuestions("https://api.mocki.io/v1/1cfba4e9"); //  + "/" + this.props.category + "/" + result
                    this.setState({
                        pageNum: this.state.pageNum + 1,
                        questionNumbering: this.state.questionNumbering + 10
                    })
                }}
            >
                <Form>
                    <h3>Page {this.state.pageNum} of 4</h3>
                    {this.state.questions.map((question, i) =>
                        <QuestionBlock 
                            key={i}
                            numbering={this.state.questionNumbering + i + 1}
                            prompt={question.prompt} 
                            options={question.options}
                            questionNumber={i+1}
                        /> 
                    )}
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        )
    }
}

GeneratePage.propTypes = {
    category: PropTypes.oneOf(["traditional", "simplified"])
}