import React, { useContext, useState } from 'react'
import { TodoContext} from './App'
const AddForm = () => {
    const {saveTodo,setSaveTodo} = useContext(TodoContext)
console.log(saveTodo);

    const [addTodo,setAddTodo] = useState('')
    const handelTodo = (e)=>{
        setAddTodo(e.target.value)
    }
    const handelAdd = ()=>{
      setSaveTodo([...saveTodo,addTodo])
      setAddTodo('')
    }
  return (
    <div className='flex justify-center gap-2 m-10'>
        <input type="text" placeholder='Add your Task..!' value={addTodo} onChange={handelTodo} />
        <button className='bg-slate-600 px-5 rounded-lg me-2' onClick={handelAdd}>Add</button>
    </div>
  )
}

export default AddForm
