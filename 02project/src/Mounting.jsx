import React from "react";
import { useState } from "react";

const Mounting = () => {
  const [text, setText] = useState("Hello World");
  const handelChange = ()=>{
    setText(
        "React World"
    )
  }
  const handelDelete = ()=>{
    setText("");
  }
  return (
    <>
      <h1>{text} </h1>
      <button onClick={handelChange}>Change me</button>

      <button onClick={handelDelete}>Delete</button>
    </>
  );
};

export default Mounting;
