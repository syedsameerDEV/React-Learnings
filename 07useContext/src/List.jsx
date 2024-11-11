import React, { useContext } from "react";
import { TodoContext } from "./App";
const List = () => {
  const { saveTodo } = useContext(TodoContext);
  return (
    <div>
      <h1>Todo List</h1>
      {saveTodo.map((item,index) => {
        return <h1 key={index}>{item}</h1>;
      })}
    </div>
  );
};

export default List;
