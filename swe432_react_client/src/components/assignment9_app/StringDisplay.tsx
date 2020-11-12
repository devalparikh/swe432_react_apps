import React from 'react';

interface stringProps {
    randomString?: string;
    currentStrings?: Array<any>;
}

export function StringDisplay(props: stringProps) {

    return (
        <div className="string-container">
            <div className="string-container-title"> String Chosen: {props.randomString === null ? "" : props.randomString} </div>
            <div className="string-subcontainer"> {props.currentStrings} </div>
        </div>
    );
}
