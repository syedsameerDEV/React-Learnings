import React, { useState } from "react";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [result, setReult] = useState("")

  function handelFname(e){
    setFname(e.target.value);
  }
  function handelLname(e){
    setLname(e.target.value);
  }
  const num1 = parseFloat(fname)
  const num2 = parseFloat(lname)
  function resultVal(e){
    e.preventDefault();
 
    const res = num1 + num2
    setReult(res)
  }
  return (
    <>
      <h1>Input handel</h1>
      <form action="#">
        <input type="text" placeholder="First Name" value={fname}  onChange={handelFname}/>
        <br />
        <br />
        <input type="text" placeholder="Last Name" value={lname} onChange={handelLname} />
        <br />
        <br />
        <input type="submit" value="Submit" onClick={resultVal} />
      </form>
      <p>{result}</p>
    </>
  );
};

export default Form;
