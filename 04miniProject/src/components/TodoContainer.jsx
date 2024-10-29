import React from "react";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex gap-5 flex-wrap">
        <div className="flex flex-col gap-3 ">
          <h1 className="font-medium 2xl:">Manage Activities</h1>

          <div>
            <input
              type="text"
              className="border border-black bg-transparent p-2"
              placeholder="Next Activity!"
            />
            <button className="bg-black text-white p-2 border border-black">
              Add
            </button>
          </div>
        </div>
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
          <h1 className="text-2xl font-medium">Today's Activity</h1>
          <p>You haven't added any activity! </p>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
