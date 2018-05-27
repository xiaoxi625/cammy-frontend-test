import React from 'react';
import { CONTENT } from './constants';
import style from './style.css';

const Wording = () => {
    return (
        <div className={`${style.bottomSpace} ${style.wordSize}`}>{CONTENT}</div>
    );
}

export default Wording;