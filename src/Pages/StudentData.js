import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import { saveUserData, saveLangSettings } from '../Redux/actions';

import { YNRadioGroup, SchlRadioGroup, NumCharsRadioGroup, TopicProfRadioGroup, LangRadioGroup } from '../Components/RadioGroup/RadioGroup';
import { TextField } from '../Components/TextField/TextField';

export class StudentData extends Component {
    render() {
        const initialValues = {
            Name: "", // done
            School: "", // done
            Email: "", // done
            Nationality: "", // done
            NativeSpeaker: "", // done
            PrevChineseEducation: "",
            RecentYrChineseEd: 0,
            IntensityOfInstruction: 0,
            NumCharactersRead: "", // done
            NumCharactersWritten: "", // done
            HeritageLearner: "", // done
            FluentWOFormal: "", // done
            FluentWOWriting: "", // done
            ChineseAtHome: "", // done
            ChineseWFriends: "", // done
            Other: "", // done
            Classical: "", // done
            StudyAbroad: "",
            LengthOfStudyAbroad: 0,
            Topics_Family_Dates_Hobby_Sports_Money: "", // done
            Topics_Weather_Direction_Doctor_Apt_Travel: "", // done
            Topics_Internet_Education_Jobs_Course_Geo: "", // done
            Topics_Uni_ChineseReligion_Customs_Gender_Env: "", // done
            Topics_LiteraryWorks_Hist_Economy: "", // done
            OtherInfo: "", // done
            LangSettings: "", // done
        };

        return(
            // TODO: add Yup validation schema
            <div>
            <Formik 
                initialValues={initialValues} 
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 4));
                    this.props.saveUserData(values)
                    this.props.saveLangSettings(values.LangSettings)
                }}
            >
                <Form>
                    <TextField question={"English Name"} qName={"Name"}/>
                    <SchlRadioGroup qName={"School"}/>
                    <TextField question={"Email"} qName={"Email"}/>
                    <TextField question={"Nationality"} qName={"Nationality"}/>

                    <YNRadioGroup 
                        question={"I am a native speaker of Chinese and was educated in a junior high and/or high school which used Chinese as the primary language of instruction."}
                        qName={"NativeSpeaker"}
                    />

                    <NumCharsRadioGroup question={"Number of character you can read:"} qName={"NumCharactersRead"}/>
                    <NumCharsRadioGroup question={"Number of character you can write:"} qName={"NumCharactersWritten"}/>

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

export default connect(
    null, 
    { saveUserData, saveLangSettings }
)(StudentData);
