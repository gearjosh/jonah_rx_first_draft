import wipReducer from './wipReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  wip: wipReducer
})

export default rootReducer;