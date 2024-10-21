import React, { useState } from "react";

const Counter = () => {
    let [number,SetNumber] =useState(0);

    function increment (){
      SetNumber(number + 1)
    }
    function decrement (){
        SetNumber(number - 1)
    }
  return (

    <div style={{ marginTop: "10px" }}>
      <h1>Counter</h1>
      <div style={{display: "flex", justifyContent:"space-between",alignItems:"center", fontSize:"20px"}}>
        <button style={{padding:"10px"}} onClick={decrement}>-</button>
        <h3>{number}</h3>
        <button style={{padding:"10px"}} onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
