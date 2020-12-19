import {combineReducers} from 'redux';

import toggleReducer from './toggleReducer';
import chooseTopicRecuder from './chooseTopicReducer';
import topicSelectReducer from './topicSelectReducer';

const allReducers = combineReducers({
    toggle: toggleReducer,
    topic: chooseTopicRecuder,
    selected: topicSelectReducer,
  })
  
  export default allReducers;