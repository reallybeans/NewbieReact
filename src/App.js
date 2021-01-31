// import logo from './logo.svg';
import './App.css';
import React from "react";
import { ClassComp, ClassComp1 } from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter"
import ParentComp from "./Components/ParentComp";
class App extends React.Component {
  styles = {
    fontStyle: "bold",
    color: "red"
  };
  render() {
    return (
    <div>
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp />
      <h1 style={this.styles}>This state</h1>
    </div>
  );
  }
}

export default App;
