import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
      }    

      handleChange (e) {
        const validInputs = /^[0-9=+-/*]+$/;
        const value = e.target.value;
        if(value && validInputs.test(value)) {
            this.props.onEvent(value);
        }
    }

    render() {
        let { tempNum, result } = this.props;
        return (
            <div className="form-group col-md-12 padding-none">
                <input
                    type="text"
                    className="display-unit"
                    placeholder={'0'}
                    onChange={this.handleChange}
                    maxLength={12}
                    value={result !== "0" && result ? result : tempNum}
                />                
            </div>
        );
    }
}

export default Display;