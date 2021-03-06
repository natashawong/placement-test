import React from 'react';

import { Field } from 'formik';

export const TextField = ({question, qName}) => {
    return(
        <div>
            <label>{question}</label>
            <Field type="text" name={qName}/>
        </div>
    )
}
