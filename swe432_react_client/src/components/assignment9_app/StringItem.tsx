import React from 'react';

interface StringItemProps {
    color?: string;
    str: string;
}

export function StringItem(props: StringItemProps) {
    return (
        <div style={{ backgroundColor: "inherit", fontWeight: 500, color: props.color == null ? "white" : props.color }}> {props.str}</div>
    )
}