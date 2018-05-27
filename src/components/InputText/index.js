import React from 'react';
import { Input } from 'antd';
import upStyle from './../style.css';

class InputText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={upStyle.inputBlock}>
                <div className={upStyle.subTitle}>{this.props.subTitle}</div>
                <Input
                    className={`${upStyle.inputSpace}`}
                    placeholder={this.props.placeHolder}
                    size="large"
                    onChange={value => {
                        this.props.changeContent(this.props.subTitle, value)
                    }}
                />
            </div>

        )
    }
}

export default InputText;