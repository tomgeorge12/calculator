import { combineReducers } from 'redux'
import calculateResult from './calculateResult';
import setNumber from './setNumber';

export default combineReducers({
    calculateResult,
    setNumber
  })