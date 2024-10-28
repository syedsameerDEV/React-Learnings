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
    </>
  );
};

export default Underline;
