import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Random from "./Random";
import Form from "./Form";
import List from "./List";
import Color from "./Color";
import Underline from "./Underline";

// Hooks
function App() {
  // let myName = "hello World";
  // function changeMe() {
  //   myName = "Reactjs";
  // }

  let [name, SetName] = useState("Hello World");
  function changeName() {
    SetName("React World");
  }
  return (
    <>
      <h1>{name}</h1>
      <button onClick={changeName}>Change me</button>
      <Counter />
      <Random />
      <Form />
      <List />
      <Color />
      <Underline />
      
    </>
  );
}

export default App;
