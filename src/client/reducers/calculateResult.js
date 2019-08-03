import {
  SET_FIRST_NUMBER,
  SET_SECOND_NUMBER,
  store
} from '../actions/index.js';

export default function calculateResult(state= store, action) {
    let resultState = state;
    if (action.argOp === '=') {
        switch (state.op) {
            case '+': resultState = { ...state, op: action.argOp, result: state.firstNumber + parseFloat(action.number), tempNum: "" }; break;
            case '-': resultState = { ...state, op: action.argOp, result: state.firstNumber - parseFloat(action.number), tempNum: "" }; break;
            case '*': resultState = { ...state, op: action.argOp, result: state.firstNumber * parseFloat(action.number), tempNum: "" }; break;
            case '/': resultState = { ...state, op: action.argOp, result: state.firstNumber / parseFloat(action.number), tempNum: "" }; break;
            case '=': resultState = { result:"", tempNum:"", firstNumber:"", op:""};break;
        }
    }
    return resultState;
}
