import React from 'react';
import style from './style.css';

class Title extends React.Component {
    render() {
        return (
            <div className={style.titleColor}>{this.props.content}</div>
        )
    }
}

export default Title;