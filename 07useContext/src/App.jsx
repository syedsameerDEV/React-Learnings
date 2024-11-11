import { createContext, useState } from "react";
import AddForm from "./AddForm";
import List from "./List";


const TodoContext = createContext();
function App() {
  const [saveTodo,setSaveTodo] = useState(["Apple","orange"])
  
  return (
    <div>
      {/* <NameContext.Provider value={{"name":person}}>
        <Father />
        <Son />
      </NameContext.Provider> */}
      <TodoContext.Provider value={{saveTodo,setSaveTodo}}>
        <AddForm/>
        <List/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
export {TodoContext}
