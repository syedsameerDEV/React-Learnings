import React, { useState } from "react";

const AddTodoForm = (props) => {
    const [newItem, setNewItem]= useState('')

    const activity = props.activity
    const setActivity = props.setActivity

    const handelChange = (e)=>{
        e.preventDefault()
        setNewItem(e.target.value)
    }

    const handelAdd = ()=>{
        setActivity([...activity, {id: activity.length+1, task:newItem}])
        setNewItem('')
    }
  return (
    <div className="flex flex-col gap-3 ">
      <h1 className="font-medium 2xl:">Manage Activities</h1>

      <div className="flex">
        <input
          type="text"
          className="border border-black bg-transparent p-2"
          placeholder="Next Activity!"
          value={newItem}
          onChange={handelChange}
        />
        <button className="bg-black text-white p-2 border border-black" onClick={handelAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodoForm;
