import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '../calc-components/Button';
import Display from '../calc-components/Display';
import {
    OPERATIONS,
    NUMBERS,
    setFirstNumber,
    setSecondNumber
  } from '../actions';

const COL_LG_4 = 'col-lg-4';
const BTN_DEFAULT = 'btn btn-default';

class Calculator extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     // tempNum: props.number,
        //     num1: 0,
        //     num2: 0,
        //     op: '',
        //     result: props.number,
        //     nums: NUMBERS,
        //     ops: OPERATIONS
        // }
        this.nums = NUMBERS;
        this.ops = OPERATIONS;
        this.onNumberClick = this.onNumberClick.bind(this);
        this.onOpClick = this.onOpClick.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     if(this.props.number!==nextProps.number) {
    //         this.setState({ tempNum: nextProps.number });
    //     }
    // }

    onNumberClick(argNum) {
        if(argNum === '=') {
            this.onOpClick(argNum);
        } else this.props.setTempNumber(argNum);
        // this.setState({ tempNum: this.state.tempNum + argNum });
    }

    onOpClick(argOp) {
        let { tempNum, firstNumber, op, result } = this.props;

        if(argOp === '+' || argOp === '-' || argOp === '*' || argOp === '/'){
            this.props.setFirstNumber(tempNum);
            this.props.setOperator(argOp);
            // this.setState({num1:parseFloat(number), op:argOp});
        } else if(argOp === 'C'){
            this.props.setFirstNumber("0")
            this.props.setTempNumber("0")
            this.props.setResult("0")
            // this.setState({result: "0"})
        } else if(argOp === 'Backspace'){
            this.props.setTempNumber(tempNum ? tempNum.toString().substr(0, tempNum.toString().length - 1) : "0");
            this.props.setResult(result ? result.toString().substr(0, result.toString().length - 1) : "0");
        } else if(argOp === '=') {
            this.props.getResult(argOp, tempNum);                     
        }
    }

    render() {
        let { tempNum, firstNumber, result } = this.props;

        let numComps = this.nums.map((num, idx) => <Button onEvent={this.onNumberClick} {...num} number={num} key={idx} />);
        let opComps = this.ops.map((op, idx) => <Button onEvent={this.onOpClick} {...op} key={idx} />);
        return (
            <div className="panel panel-default col-lg-10">
                <div className="panel-body">
                    <div className='col-lg-10'>
                        <Display result={result} tempNum={tempNum} />
                    </div>
                    <div className='btn-group col-lg-6'>
                        {numComps}
                    </div>
                    <div className='btn-group col-lg-4'>
                        {opComps}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Calculator);