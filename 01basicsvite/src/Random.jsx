import React, { useState } from "react";

const Random = () => {
   let [randomNum, SetRandomNum] = useState(0)

   function number (){
    let sum = Math.floor(Math.random()*100) +1

    SetRandomNum(sum)
   }
  return (
    <>
    <h3>Click me to generate random number from 1 to 100</h3>
    <h1>{randomNum}</h1>
    <button onClick={number}>Click me</button>
    </>
    
  );
};

export default Random;
