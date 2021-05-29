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
            <label>OTHER</label>
            <Field type="radio" name={qName} value="OTHER"/>
        </div>
    )
}
