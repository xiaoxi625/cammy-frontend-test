import React from 'react';
import Title from './../../components/Title';
import Wording from './../../components/Wording';
import Message from './../../components/Message';
import InputText from './../../components/InputText';
import ErrorMessage from './../../components/ErrorMessage';
import { NAME, EMAIL, SUBJECT, PHONE, NAME_HOLDER, EMAIL_HOLDER, SUBJECT_HOLDER, PHONE_HOLDER } from './../../components/InputText/constants';
import { CONTACT_TITLE } from './../../components/Title/constants';
import { Row, Col, Button } from 'antd';
import _ from 'lodash';
import { isEmpty, isEmail } from './../validation';
import style from './style.css';
import actions  from './../../actions/index';
import { connect } from 'react-redux';



class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            hasErr: false,
            errMessage: '',
            apiSuccess: true
        }
    }
    
    componentWillReceiveProps =(nextProps) => {
        if (nextProps.contacts.status === 'success' ) {
            this.props.router.push('/thankyou');
        }else if(nextProps.contacts.status === 'failed'){
            let tempState = _.merge({}, this.state);
            tempState.apiSuccess = false;
            this.setState(tempState);
        }
    }
    
    changeContent = (type, value) => {
        let field = type.toLowerCase();
        let stateValue = _.merge({},this.state);
        stateValue[field] = value.target.value;
        this.setState(stateValue);
    }
    validate = () => {
        let nameErr = isEmpty(this.state.name) ? 'Please provide your name' : '';
        let emailErr = isEmpty(this.state.email) ? 'Please provide your email' : (isEmail(this.state.email) ? '' : 'Email is invalid');
        let subjectErr = isEmpty(this.state.subject) ? 'Please tell us your subject' : '';
        let messageErr = isEmpty(this.state.message) ? 'Please provide your message' : '';
        let tempState = _.merge({}, this.state);

        if(nameErr) {
            tempState.errMessage = nameErr;
        }else if (emailErr) {
            tempState.errMessage = emailErr;
        }else if (subjectErr) {
            tempState.errMessage = subjectErr;
        }else if (messageErr) {
            tempState.errMessage = messageErr;
        }else{
            tempState.errMessage = '';
            tempState.hasErr = false;
        }
        if(tempState.errMessage){
            tempState.hasErr = true;
        }

        if(tempState.hasErr !== this.state.hasErr || tempState.errMessage !== this.state.errMessage){
            this.setState(tempState);
        }
        return tempState.hasErr ? false : true;
    }

    render() {
        const { name, email, phone, subject, message, errMessage, apiSuccess } = this.state;
        console.log('--apiSuccess--',apiSuccess);
        const emailPayload = {
            name,
            email,
            subject,
            details: message
        }
        const storeMessagePayload = {
            name,
            email,
            mobile: phone,
            subject,
            details: message
        }
        return (
            <div className={style.allBlock}>
                <Row>
                    <Col span={24}>
                        <div className={`${style.titleColor} ${style.titleSize}`}>
                            <Title content={CONTACT_TITLE}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}><Wording /></Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div>
                            <InputText
                                subTitle={NAME}
                                placeHolder={NAME_HOLDER}
                                changeContent={this.changeContent}
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div>
                            <InputText 
                                subTitle={EMAIL} 
                                placeHolder={EMAIL_HOLDER} 
                                changeContent={this.changeContent}
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div>
                            <InputText 
                                subTitle={PHONE} 
                                placeHolder={PHONE_HOLDER} 
                                changeContent={this.changeContent}
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div>
                            <InputText 
                                subTitle={SUBJECT} 
                                placeHolder={SUBJECT_HOLDER} 
                                changeContent={this.changeContent}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Message
                            changeContent={this.changeContent}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col><ErrorMessage errMessage={errMessage} /></Col>
                </Row>
                <Row>
                    <div className={`${style.buttonPosition} ${style.buttonBlock}`}>
                        <Button
                            className={style.sendButton}
                            onClick={()=>{
                                if(this.validate()){
                                    this.props.storeMessage(storeMessagePayload);
                                    this.props.sendEmail(emailPayload);
                                }
                            }}
                        >
                            SEND YOUR MESSAGE
                        </Button>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <div className={apiSuccess ? style.hideText : ''}>Please using authed email address for mailgun!</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeMessage:  (data) => dispatch(actions.persistMessage(data)),
        sendEmail: (data) => dispatch(actions.sendMessage(data)),
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);