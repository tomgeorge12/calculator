import { combineReducers } from 'redux'
import {
  SET_FIRST_NUMBER,
  SET_SECOND_NUMBER,
  store
} from '../actions/index.js';

function getResult(state= store, action) {
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

function setNumber(state = store, action) {
    switch(action.type) {
        case "SET_TEMP_NUMBER": return {
            ...state,
            tempNum: state.tempNum + action.number
        };break;
        case 'SET_FIRST_NUMBER': return {
            ...state,
            firstNumber: action.number,
            tempNum: ''
        };break;
        case 'SET_OPERATOR': return {
            ...state,
            op: action.op
        };break;
        case 'SET_RESULT': return {
            ...state,
            result: action.value
        };break;
        default:
            return state; break;
    }
}

export default combineReducers({
    getResult,
    setNumber
  })