import {combineReducers} from 'redux';

import toggleReducer from './toggleReducer';
import chooseTopicRecuder from './chooseTopicReducer';

const allReducers = combineReducers({
    toggle: toggleReducer,
    topic: chooseTopicRecuder,
  })
  
  export default allReducers;