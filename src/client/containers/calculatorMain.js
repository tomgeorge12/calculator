import { connect } from 'react-redux'
import { setFirstNumber, setTempNumber, setOperator, setResult, getResult } from '../actions'
import Calculator from '../calc-components/Calculator.js'

const mapStateToProps = state => {
    return {
      tempNum: state.setNumber.tempNum,
      firstNumber: state.setNumber.firstNumber,
      op: state.setNumber.op,
      result: state.calculateResult.result
    }
  };
  
const mapDispatchToProps = dispatch => ({
  setFirstNumber: number => dispatch(setFirstNumber(number)),
  setTempNumber: tempNum => dispatch(setTempNumber(tempNum)),
  setOperator: op => dispatch(setOperator(op)),
  setResult: value => dispatch(setResult(value)),
  getResult: op => dispatch(getResult(op))
})
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)