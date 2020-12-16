import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import QuestionBlock from '../Components/QuestionBlock/QuestionBlock'

export default class GeneratePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            questions: [],
            pageNum: 0,
        };
    }

    componentDidMount() {
        // fetch initial questions here
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
                    this.setState({
                        // compute score (util function(answerKey, values))
                        // answerkey = {1: "A", 2: "B", 3: "C",...10:"A"} object!
                        // update questions (fetchApi(score))
                        // update pageNum
                    })
                }}
            >
                <Form>
                    {this.state.questions.map((question, i) =>
                        <QuestionBlock 
                            numbering={i+1}
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