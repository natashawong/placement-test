import React, {Component} from 'react';
import { Formik, Form } from 'formik';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { saveUserData, saveLangSettings } from '../Redux/actions';

import { YNRadioGroup, SchlRadioGroup, LangRadioGroup } from '../Components/RadioGroup/RadioGroup';
import { TextField } from '../Components/BasicFields/BasicFields';

export class StudentData extends Component {
    render() {
        const initialValues = {
            Name: "",
            School: "",
            Email: "",
            NativeSpeaker: "",
            Beginner: "",
            HeritageLearner: "",
            LangSettings: "",
        };

        return(
            // TODO: add Yup validation schema
            <div>
            <Formik 
                initialValues={initialValues} 
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 4));
                    this.props.saveUserData(values);
                    this.props.saveLangSettings(values.LangSettings);

                    // Route separate path for exceptions (beginner, native speakers)
                    if (values.Beginner == "Yes") {
                        this.props.history.push('beginner-page');
                    } else if (values.NativeSpeaker == "Yes") {
                        this.props.history.push('native-page');
                    } else {
                        this.props.history.push('start-test');
                    }
                }}
            >

                <Form>
                    <TextField question={"English Name"} qName={"Name"}/>
                    <SchlRadioGroup qName={"School"}/>
                    <TextField question={"Email"} qName={"Email"}/>

                    <YNRadioGroup 
                        question={"I am a native speaker of Chinese and was educated in a junior high and/or high school which used Chinese as the primary language of instruction. (You will not need to take the test.)"}
                        qName={"NativeSpeaker"}
                    />

                    <YNRadioGroup 
                        question={"I have little to no experience with the Chinese language. (You will not need to take the test and will be placed into CHIN1A.)"}
                        qName={"Beginner"}
                    />

                    <YNRadioGroup 
                        question={"A heritage learner class (with enhanced instruction on reading and writing) may be suitable to me."}
                        qName={"HeritageLearner"}
                    />

                    <LangRadioGroup qName={"LangSettings"}/>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            </div>
        )
    }
}

const addRouter = withRouter(StudentData);

export default connect(
    null, 
    { saveUserData, saveLangSettings }
)(StudentData);
