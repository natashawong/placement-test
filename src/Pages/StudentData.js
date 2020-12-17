import React, {Component} from 'react';
import { Formik, Form } from 'formik';

export default class Settings extends Component {
    render() {
        const initialValues = {
            Name: "",
            School: "CMC",
            Email: "",
            Nationality: "",
            NativeSpeaker: false,
            PrevChineseEducation: "",
            RecentYrChineseEd: 0,
            IntensityOfInstruction: 0,
            NumCharactersRead: 0,
            NumCharactersWritten: 0,
            HeritageLearner: false,
            FluentWOFormal: false,
            FluentWOWriting: false,
            ChineseAtHome: false,
            ChineseWFriends: false,
            Other: "",
            Classical: false,
            StudyAbroad: false,
            LengthOfStudyAbroad: 0,
            Topics_Family_Dates_Hobby_Sports_Money: "",
            Topics_Weather_Direction_Doctor_Apt_Travel: "",
            Topics_Internet_Education_Jobs_Course_Geo: "",
            Topics_Uni_ChineseReligion_Customs_Gender_Env: "",
            Topics_LiteraryWorks_Hist_Economy: "",
            OtherInfo: "",
        };

        return(
            <Formik 
                initialValues={initialValues} 
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 4));
                    // DISPATCH action submitting values into user state (actions.js)
                }}
            >
                <Form>
                    {/* gazilion fields – components needed to be built */}
                </Form>
            </Formik>
        )
    }
}
