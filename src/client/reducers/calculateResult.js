import {
  SET_FIRST_NUMBER,
  SET_SECOND_NUMBER,
  store
} from '../actions/index.js';

export default function calculateResult(state= store, action) {
    let resultState = state;
    if (action.op === '=') {
        switch (state.op) {
            case '+': {
                const result = parseFloat(state.firstNumber) + parseFloat(action.number);
                resultState = { ...state, op: action.argOp, result, tempNum: result };
                break;
            }
            case '-': {
                const result = parseFloat(state.firstNumber) - parseFloat(action.number);
                resultState = { ...state, op: action.argOp, result, tempNum: result };
                break;
            }
            case '*': {
                const result = parseFloat(state.firstNumber) * parseFloat(action.number);
                resultState = { ...state, op: action.argOp, result, tempNum: result };
                break;
            }
            case '/': {
                const result = parseFloat(state.firstNumber) / parseFloat(action.number);
                resultState = { ...state, op: action.argOp, result, tempNum: result };
                break;
            }
            case '=': resultState = { result:"", tempNum:"", firstNumber:"", op:""};break;
        }
    }
    return resultState;
}
