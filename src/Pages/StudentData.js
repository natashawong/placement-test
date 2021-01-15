import React, {Component} from 'react';
import { Formik, Form } from 'formik';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { saveUserData, saveLangSettings } from '../Redux/actions';

import { YNRadioGroup, SchlRadioGroup, NumCharsRadioGroup, TopicProfRadioGroup, LangRadioGroup } from '../Components/RadioGroup/RadioGroup';
import { TextField, NumField } from '../Components/BasicFields/BasicFields';

export class StudentData extends Component {
    render() {
        const initialValues = {
            Name: "",
            School: "",
            Email: "",
            Nationality: "",
            NativeSpeaker: "",
            Beginner: "",
            PrevChineseEducation: 0,
            ChineseProfTests: "",
            RecentYrChineseEd: 0,
            IntensityOfInstruction: 0,
            NumCharactersRead: "",
            NumCharactersWritten: "",
            HeritageLearner: "",
            FluentWOFormal: "",
            FluentWOWriting: "",
            ChineseAtHome: "",
            ChineseWFriends: "",
            Other: "",
            Classical: "",
            LengthOfStudyAbroad: 0,
            Topics_Family_Dates_Hobby_Sports_Money: "",
            Topics_Weather_Direction_Doctor_Apt_Travel: "",
            Topics_Internet_Education_Jobs_Course_Geo: "",
            Topics_Uni_ChineseReligion_Customs_Gender_Env: "",
            Topics_LiteraryWorks_Hist_Economy: "",
            OtherInfo: "",
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
                    <TextField question={"Nationality"} qName={"Nationality"}/>

                    <YNRadioGroup 
                        question={"I am a native speaker of Chinese and was educated in a junior high and/or high school which used Chinese as the primary language of instruction. (You will not need to take the test.)"}
                        qName={"NativeSpeaker"}
                    />

                    <YNRadioGroup 
                        question={"I have little to no experience with the Chinese language. (You will not need to take the test and will be placed into CHIN1A.)"}
                        qName={"Beginner"}
                    />

                    <NumField question={"Previous Chinese education in years"} qName={"PrevChineseEducation"}/>
                    <TextField question={"List any Chinese proficiency tests you have taken (Test name - Score)"} qName={"ChineseProfTests"}/>
                    <NumField question={"Most recent year taking Chinese"} qName={"RecentYrChineseEd"}/>
                    <NumField question={"Intensity of most recent instruction (number of hours/week)"} qName={"IntensityOfInstruction"}/>

                    <NumCharsRadioGroup question={"Number of character you can read:"} qName={"NumCharactersRead"}/>
                    <NumCharsRadioGroup question={"Number of character you can write:"} qName={"NumCharactersWritten"}/>

                    <NumField question={"Length of sutdy abroad if any"} qName={"LengthOfStudyAbroad"}/>

                    {/* TODO: map bottom sections out when I have time, cleaner */}
                    <YNRadioGroup 
                        question={"A heritage learner class (with enhanced instruction on reading and writing) may be suitable to me."}
                        qName={"HeritageLearner"}
                    />
                    <YNRadioGroup 
                        question={"I speak Mandarin Chinese fluently but have limited to no formal instruction reading and writing."}
                        qName={"FluentWOFormal"}
                    />
                    <YNRadioGroup 
                        question={"I speak Mandarin Chinese fluently and have proficiency reading but have limited writing skills."}
                        qName={"FluentWOWriting"}
                    />
                    <YNRadioGroup 
                        question={"I speak Mandarin Chinese at home."}
                        qName={"ChineseAtHome"}
                    />
                    <YNRadioGroup 
                        question={"I speak Mandarin Chinese with friends."}
                        qName={"ChineseWFriends"}
                    />
                    <TextField question={"Other (please specify)"} qName={"Other"}/>
                    
                    <YNRadioGroup 
                        question={"Have you studied any Classical Chinese?"}
                        qName={"Classical"}
                    />

                    <h4>I can understand and orally answer questions in Chinese on the following topics:</h4>
                    <TopicProfRadioGroup question={"1. Family members, dates, times, hobbies, sports, money in Chinese."} qName={"Topics_Family_Dates_Hobby_Sports_Money"}/>
                    <TopicProfRadioGroup question={"2. Weather, asking directions, seeing a doctor, renting an apartment, travel."} qName={"Topics_Weather_Direction_Doctor_Apt_Travel"}/>
                    <TopicProfRadioGroup question={"3. Internet/computers, education, jobs, course selection, geography of China."} qName={"Topics_Internet_Education_Jobs_Course_Geo"}/>
                    <TopicProfRadioGroup question={"4. University admissions, Chinese religions, customs, gender, and environmental issues."} qName={"Topics_Uni_ChineseReligion_Customs_Gender_Env"}/>
                    <TopicProfRadioGroup question={"5. Chinese literary works, modern Chinese history, China's economy and politics."} qName={"Topics_LiteraryWorks_Hist_Economy"}/>

                    <TextField question={"Anything else about your Chinese learning experience (formal or informal) that may help us with your placement:"} qName={"OtherInfo"}/>

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
