import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './store/dispatch';

import Routes from 'Routes';

import './App.css';

function App() {
  const dispatch = useDispatch();
  dispatch(login());
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
