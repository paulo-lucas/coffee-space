import React from 'react';

import './styles.css';

interface WriterBoxArgs {
    onChange(content: string): void;
    className: string;
}

export default function WriterBox (props: WriterBoxArgs) {


    return (
        <>
            <textarea id="input-area" onChange={(e) => props.onChange(e.target.value)} className={props.className} ></textarea>
        </>
    );
}