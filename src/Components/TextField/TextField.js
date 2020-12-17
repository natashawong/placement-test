import React from 'react';

export const TextField = ({question, qName}) => {
    return(
        <div>
            <label>{question}</label>
            <input type="text" name={qName}/>
        </div>
    )
}