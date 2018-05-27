import React from 'react';
import upStyle from './../style.css';
import style from './style.css';


class ErrorMessage extends React.Component {
    render() {
        return (
            <div className={`${style.errColor} ${upStyle.inputBlock}`}>{this.props.errMessage}</div>
        )
    }
}

export default ErrorMessage;