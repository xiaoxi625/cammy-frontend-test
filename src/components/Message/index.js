import React from 'react';
import { Input } from 'antd';
import upStyle from './../style.css';

const { TextArea } = Input;

class Message extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={upStyle.inputBlock}>
                <div className={upStyle.subTitle}>Message</div>
                <TextArea
                    className={`${upStyle.inputSpace}`}
                    placeholder="If you can include any details from your account, we will be able to get back to you faster."
                    rows={6}
                    onChange={value => {
                        this.props.changeContent('Message', value)
                    }}
                />
            </div>

        )
    }
}

export default Message;