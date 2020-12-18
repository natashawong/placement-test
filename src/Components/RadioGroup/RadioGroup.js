import React from 'react';

import { Field } from 'formik';


/*
-----------------
Radio Group Types
-----------------

Yes/No Radio Group: 
- question, qName
- labels: Yes, No

School Radio Group:
- qName
- labels: CMC, HMC, POM, PTZ, SCR
Note: question already inserted

Number of Character Radio Group:
- question, qName
- labels: less than 200, 200 to 250, 500 to 800, more than 800

Topic Proficiency Radio Group:
- question, qName
- labels: All, Most, Some, None
*/

export const LangRadioGroup = ({qName}) => {
    return(
        <div>
            <h4>Would you like to take the placement test in simplified or traditional Chinese?</h4>
            <label>Simplified</label>
            <Field type="radio" name={qName} value="simplified"/>
            <label>Traditional</label>
            <Field type="radio" name={qName} value="traditional"/>
        </div>
    )
}

export const YNRadioGroup = ({question, qName}) => {
    return(
        <div>
            <h4>{question}</h4>
            <label>Yes</label>
            <Field type="radio" name={qName} value="Yes"/>
            <label>No</label>
            <Field type="radio" name={qName} value="No"/>
        </div>
    )
}

export const SchlRadioGroup = ({qName}) => {
    return(
        <div>
            <h4>Which school do you go to?</h4>
            <label>CMC</label>
            <Field type="radio" name={qName} value="CMC"/>
            <label>HMC</label>
            <Field type="radio" name={qName} value="HMC"/>
            <label>POM</label>
            <Field type="radio" name={qName} value="POM"/>
            <label>PTZ</label>
            <Field type="radio" name={qName} value="PTZ"/>
            <label>SCR</label>
            <Field type="radio" name={qName} value="SCR"/>
        </div>
    )
}

export const NumCharsRadioGroup = ({question, qName}) => {
    return(
        <div>
            <h4>{question}</h4>
            <label>less than 200</label>
            <Field type="radio" name={qName} value="<200"/>
            <label>200 to 250</label>
            <Field type="radio" name={qName} value="200-250"/>
            <label>500 to 800</label>
            <Field type="radio" name={qName} value="500-800"/>
            <label>more than 800</label>
            <Field type="radio" name={qName} value=">800"/>
        </div>
    )
}

export const TopicProfRadioGroup = ({question, qName}) => {
    return(
        <div> 
            <h4>{question}</h4>
            <label>All</label>
            <Field type="radio" name={qName} value="All"/>
            <label>Most</label>
            <Field type="radio" name={qName} value="Most"/>
            <label>Some</label>
            <Field type="radio" name={qName} value="Some"/>
            <label>None</label>
            <Field type="radio" name={qName} value="None"/>
        </div>
    )
}