import React, { Component } from 'react';

class OprButton extends Component {
    render() {
        let { text,onEvent, className } = this.props;
        return (
            <button className={`${className || 'btn'}`} onClick={()=>onEvent(text)}>{text}</button>
        );
    }
}

export default OprButton;