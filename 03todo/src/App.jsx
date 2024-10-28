import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState("");
  const handelChange = (e) => {
    setTodos(e.target.value);
  };
  // todo store the todo data and updadte
  const [todoItems, setTodoItems] = useState([]);
  const handelAdd = (e) => {
    e.preventDefault();
    setTodoItems([...todoItems, todos]);
    setTodos("");
  };
  return (
    <>
      <h1>Todo App</h1>
      <form action="#" onSubmit={handelAdd}>
        <section>
          <input
            type="text"
            placeholder="Add some task here...!"
            value={todos}
            onChange={handelChange}
            style={{ fontSize: "25px" }}
          />
          <button type="submit">Add</button>
        </section>
      </form>

      <ul>
        {todoItems.map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span>
              <button>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
