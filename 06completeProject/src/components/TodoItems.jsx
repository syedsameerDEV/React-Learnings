import React from "react";

const TodoItems = (props) => {
    const item = props.items
    const setItems = props.setItems

    const handelDelete = (deleteid)=>{
      let temp =  item.filter((items)=>{
        if(items.id == deleteid){
            return false
        }
        return true
      })
      setItems(temp)
        
    }
   
  return (
    <div className="flex justify-between">
      <p key={props.keyId}>
        {props.index}. {props.activity}
      </p>
      <button className="text-red-500" onClick={()=>{
        handelDelete(props.id)
      }}>Delete</button>
    </div>
  );
};

export default TodoItems;
