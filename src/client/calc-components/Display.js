import React, { Component } from 'react';

class Display extends Component {
    render() {
        let { tempNum, result } = this.props;
        return (
            <div className="form-group col-md-12">
                <input type="text" className="form-control" placeholder={'0'} readOnly="readOnly" maxLength={12} value={result !== "0" && result ? result : tempNum} />                
            </div>
        );
    }
}

export default Display;