import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import QuizContainer from './Containers/QuizContainer';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './actions';


const App = () => {

  const [quiz, setState] = useState(false);

  const dispatch = useDispatch();

  return (
    <div>
      <QuizContainer />
      
    </div>

  );
}

export default App;
