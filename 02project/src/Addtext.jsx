import { useState } from "react";

const Addtext = () => {
  const [todo, setTodo] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const handelSubmit = (e) => {
    e.preventDefault();
    setTodoItems([
      ...todoItems,
      {
        value: todo,
        checked: false,
      },
    ]);
    setTodo("");
  };

  // const handelCheckBox = ()=>{
  //   todoItems[]
  // }
  const [count, setCount] = useState(0)
  const handleClick = () => {
  setCount(count + 1)
  }
  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="Add Something ...!"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todoItems.map((item, index) => {
          return (
            <li key={index}>
              {/* <input type="checkbox"  onChange={(e)=>{
                setTodoItems[]
              }}/> */}
              <span>{item.value}</span>
              <button
                onClick={() => {
                  todoItems.splice(index, 1);
                  setTodoItems([...todoItems]);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <p>Count:{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default Addtext;
