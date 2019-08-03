import {
  SET_FIRST_NUMBER,
  SET_SECOND_NUMBER,
  store
} from '../actions/index.js';

export default  function setNumber(state = store, action) {
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
