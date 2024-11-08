import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [activity, setActivity] = useState([]);
  return (
    <div>
      <div className="flex gap-5 flex-wrap">
        {/* add todo */}
        <AddTodoForm activity={activity} setActivity={setActivity} />
        {/* today activity */}
        <TodoList activity={activity} setActivity={setActivity} />
      </div>
    </div>
  );
};

export default TodoContainer;
