
import TodoItems from "./TodoItems";

const TodoList = (props) => {
  
    const activity = props.activity
    const setActivity = props.setActivity
    // const { activity = [], setActivity } = props;
  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>
      {activity.length===0?<p>You haven't added any activity!</p> : "" }
    
      {activity.map((items, index) => {
        return (
          <TodoItems
            id={items.id}
            keyId={index}
            activity={items.task}
            index={index + 1}
            items={activity}
            setItems={setActivity}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
