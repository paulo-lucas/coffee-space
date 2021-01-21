import React, { useState } from 'react';
import Markdown from 'react-markdown';

import WriterBox from '../../components/WriterBox';

import './styles.css';

export default function Convert() {
    const [content, setContent] = useState('');

    return (
        <div id="convert-page">
            <WriterBox onChange={setContent} className="writer-box" />

            <Markdown className="markdown">{content}</Markdown>
        </div>
    );
}