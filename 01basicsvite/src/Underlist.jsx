import React from "react";
import { useState } from "react";
const Underlist = (props) => {
  const [check, setCheck] = useState(false);
  const handelClick = () => {
    setCheck(!check);
  };
  return (
    <>
      <input type="checkbox" onChange={handelClick} />
      <span style={{ textDecoration: check ? "line-through" : "none" }}>
        {props.activity}
      </span>
    </>
  );
};

export default Underlist;
