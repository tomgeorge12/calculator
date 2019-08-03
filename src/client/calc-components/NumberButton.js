import React, { Component } from 'react';

class NumberButton extends Component {
    render() {
        let { number,onNumberClick, className } = this.props;
        return (
            <button className={className || 'btn'} onClick={()=>onNumberClick(number)}>{number}</button>
        );
    }
}

export default NumberButton;