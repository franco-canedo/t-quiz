import {combineReducers} from 'redux';

import toggleReducer from './toggleReducer';

const allReducers = combineReducers({
    toggle: toggleReducer,
  })
  
  export default allReducers;