import React from 'react';
import './App.css';
import {simpleCounter} from "./Atoms";
import {useRecoilValue} from "recoil";

function App() {

  const counter = useRecoilValue(simpleCounter);//Only get value. it can't change.
  return (
    <div className="App">
      <h1>Simple Counter With Recoil</h1>
      <p>{counter}</p>
    </div>
  );
}

export default App;
