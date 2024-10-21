import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState({
    backgroundColor: "red",
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const handelChange = () => {
    setColor((prevColor) => ({
        ...prevColor,
        backgroundColor: prevColor.backgroundColor === "red" ? "green" : "red", // Toggle between red and green
      }));
  };
  return (
    <>
      <h1>Green vs Red</h1>
      <div className="container" style={color}></div>
      <button onClick={handelChange}>Click me</button>
    </>
  );
};

export default Color;
