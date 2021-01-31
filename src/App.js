// import logo from './logo.svg';
// import './App.css';
import React from "react";
import ClassProps from "./Properties/ClassProps";
import { ClassComp, ClassComp1 } from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter"
import ParentComp from "./Components/ParentComp";
import FunctionProps from "./Properties/FunctionProps";
function App() {
  return (
    <div>
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp />
      <ClassProps name="Bean" job="Homework"/>
      <FunctionProps name="Bean 1" job="Dyx"/>
    </div>
  );
}

export default App;
