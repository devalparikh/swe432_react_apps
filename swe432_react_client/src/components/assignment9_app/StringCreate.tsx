import React from 'react';

interface StringCreateProps {
    updateStrings: (list: string[]) => void;
    writtenStrings: string[];
}

export function StringCreate(props: StringCreateProps) {
    return (
        <div className="string-container">
            <div className="string-container-title"> Enter strings in the blue box below. </div>
            <textarea className="string-subcontainer" placeholder="Click here to add text." onChange={(event) => { props.updateStrings(event.target.value.split("\n")) }} value={props.writtenStrings.join("\n")} />
        </div>
    );
}