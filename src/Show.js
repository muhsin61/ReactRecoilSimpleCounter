import React from 'react';
import './App.css';
import {simpleCounter} from "./Atoms";
import {useRecoilValue} from "recoil";

function App() {

  const counter = useRecoilValue(simpleCounter);
  return (
    <div className="App">
      <h1>deneme</h1>
      <p>{counter}</p>
    </div>
  );
}

export default App;
