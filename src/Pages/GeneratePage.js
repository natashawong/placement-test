import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import QuestionBlock from '../Components/QuestionBlock/QuestionBlock'

export default class GeneratePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            questions: [],
            questionNumbering: 0,
            pageNum: 1,
        };
    }

    setQuestions(url) {
        fetch(url)
        .then(resp => resp.json())
        .then(data => this.setState({questions: data}))
    }

    componentDidMount() {
        // add an extra /traditional or /simplified to get specifically trad or simp API questions + answers
        this.setQuestions('https://api.mocki.io/v1/3a1b18ab' + "/" + this.props.category);
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
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 4));
                    // util function to calc: num correct and append to a user data state
                    // url has to pull advanced or medium accordingly (append to url)
                    this.setQuestions("https://api.mocki.io/v1/b4f55606" + "/" + this.props.category);
                    this.setState({
                        pageNum: this.state.pageNum + 1,
                        questionNumbering: this.state.questionNumbering + 10
                    })
                }}
            >
                <Form>
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
                    <h3>Page {this.state.pageNum} of 4</h3>
                </Form>
            </Formik>
        )
    }
}

GeneratePage.propTypes = {
    category: PropTypes.oneOf(["traditional", "simplified"])
}