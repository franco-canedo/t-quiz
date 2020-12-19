import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import Quiz from './Containers/Quiz';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './actions';


const App = () => {

  const [quiz, setState] = useState(false);

  const dispatch = useDispatch();

  return (
    <div>
      <Quiz />
    </div>

  );
}

export default App;
