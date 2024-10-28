<<<<<<< HEAD
import React from "react";
import Underlist from "./Underlist";


const Underline = () => {
  const todoList = ["wake up 5:30", "walking", "have a breakfast"];

  return (
    <>
      <h1>Click to Underline</h1>
      {todoList.map((items) => {
        return <Underlist activity = {items} />
      })}
=======

import Underlinelist from './Underlinelist'

const Underline = () => {
 let todoList = ["wakeup soon", "walking", "breakfast"]
  return (
    <>
    <h1>Click to Underline</h1>
    {
      todoList.map((items)=>{

       return <Underlinelist acti = {items}/>
      })
    }
  
>>>>>>> 7e33fe6475ff313ccde2b0704aba070e58326d8f
    </>
  );
};

export default Underline;
