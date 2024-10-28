import React, { useState } from "react";

const Underlinelist = (props) => {
  const [task, setTask] = useState(false);
  const handelChange = () => {
    setTask(!task);
  };
  return (
    <>
      <input type="checkbox" onChange={handelChange} />
      <span
        style={{
          textDecoration: task ? "line-through" : "none",
        }}
      >
        {props.acti}
      </span>
    </>
  );
};

export default Underlinelist;
