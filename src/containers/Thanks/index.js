import React from 'react';
import style from './style.css';
import Title from './../../components/Title';
import { THANK_YOU } from './../../components/Title/constants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'


class Thanks extends React.Component {
    render() {
        return (
            <div className={`${style.textPosition} ${style.textSize}`}>
                <Title content={THANK_YOU}/>
            </div>
        );
    }
}

export default withRouter(connect()(Thanks));