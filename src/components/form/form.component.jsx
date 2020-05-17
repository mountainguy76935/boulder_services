import React from 'react';

export const Form = (props) => {
    return(
        <React.Fragment>
            <label htmlFor={props.title}>{props.label}</label>
                <input type={props.type} name={props.title} value={props.value} onChange={(e) => props.changeFunction(e.target.value)}/>
        </React.Fragment>
    )
}