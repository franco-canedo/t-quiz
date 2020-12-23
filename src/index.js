import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mysass.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import allReducers from './reducers';

const store = createStore(
  allReducers,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const API_FILM = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple";
const API_MUSIC = "https://opentdb.com/api.php?amount=10&category=12&type=multiple";
const API_TELEVISION = "https://opentdb.com/api.php?amount=10&category=14&type=multiple";
const API_GENERAL_KNOWLEDGE = "https://opentdb.com/api.php?amount=10&category=9&type=multiple";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} apiFilm={API_FILM}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
