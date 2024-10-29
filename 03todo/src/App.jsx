import { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("")
  const handelChange = (e)=>{
    setNewTask(e.target.value)
  }
  const [addTask, setAddTask] = useState([])
  const handelAdd = (e)=>{
    e.preventDefault()
    setAddTask([...addTask, {id:addTask.length+1, task: newTask}])
    setNewTask("")
  }
  const handelDelete = (index)=>{
    let temp = addTask.filter((items)=>{
      if(items.id == index){
        return false
      }
      return true
    })
    setAddTask(temp)
  }
  return (
    <>
      <h1>Todo Task</h1>
      <form action="#">
        <input type="text" value={newTask} onChange={handelChange} placeholder="Add your daily tasks...!" />
        <button onClick={handelAdd}>Add</button>
      </form>
      <section>
        <h2>Task List</h2>
        <ul>
          {
            addTask.map((items)=>{
              return(
                <li key={items.id}><span>{items.task}</span> <button onClick={()=>{
                  handelDelete(items.id)
                }}>delete</button></li>
              )
            })
          }
        </ul>
      </section>
    </>
  );
}

export default App;
