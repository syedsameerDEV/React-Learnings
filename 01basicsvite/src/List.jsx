/*  */
import React, { useState } from "react";

const List = () => {
  const [listArr, setListArr] = useState([]);
  const [item, setitem] = useState("");
  const handelItem = (e) => {
    setitem(e.target.value);
  };
  const handelAdd = () => {
    setListArr([...listArr, item]);
    setitem("");
  };
  return (
    <>
      <h1>My Shopping List</h1>
      <input type="text" value={item} onChange={handelItem} />
      <button onClick={handelAdd}>Add</button>
      <ul>
        {listArr.map((items) => {
          return <li>{items}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
