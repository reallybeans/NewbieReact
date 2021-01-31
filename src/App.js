// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {ClassComp,ClassComp1} from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter"
import ParentComp from "./Components/ParentComp";
function App() {
  return (
  <div>
    <ClassComp />
    <ClassComp1 />
    <Click />
    <Counter />
    <ParentComp />
  </div>
  );
}

export default App;
