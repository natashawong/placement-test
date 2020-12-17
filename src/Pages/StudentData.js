import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

import { saveUserData, saveLangSettings } from '../Redux/actions';

import { YNRadioGroup, SchlRadioGroup, NumCharsRadioGroup, TopicProfRadioGroup } from '../Components/RadioGroup/RadioGroup';
import { TextField } from '../Components/TextField/TextField';

export default class Settings extends Component {
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
            Topics_Family_Dates_Hobby_Sports_Money: "",
            Topics_Weather_Direction_Doctor_Apt_Travel: "",
            Topics_Internet_Education_Jobs_Course_Geo: "",
            Topics_Uni_ChineseReligion_Customs_Gender_Env: "",
            Topics_LiteraryWorks_Hist_Economy: "",
            OtherInfo: "",
            LangSettings: "",
        };

        return(
            <Formik 
                initialValues={initialValues} 
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 4));
                    this.props.store.dispatch(saveUserData(values))
                    this.props.store.dispatch(saveLangSettings(values.LangSettings))

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

                    {/* I have to change topic prof checks */}
                    <Link to="/start-test"><button type="submit">Submit</button></Link>
                </Form>
            </Formik>
        )
    }
}
