import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './actions';

function App() {

  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggle())}>toggle</button>
  );
}

export default App;
