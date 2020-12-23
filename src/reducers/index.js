import {combineReducers} from 'redux';

import toggleReducer from './toggleReducer';
import chooseTopicRecuder from './chooseTopicReducer';
import topicSelectReducer from './topicSelectReducer';
import addPointReducer from './addPointReducer';
import selectionReducer from './selectionReducer'

const allReducers = combineReducers({
    toggle: toggleReducer,
    topic: chooseTopicRecuder,
    selected: topicSelectReducer,
    score: addPointReducer,
    selection: selectionReducer,
  })
  
  export default allReducers;