import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";


function App() {
  return (
    
    <div> 
      <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-lg">
          <Header />
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgColor={"#8272DA"} title={"23"} subTitle={"Chennai"} />
            <Card
              bgColor={"#FD6663"}
              title={"December"}
              subTitle={"10:10:00"}
            />
            <Card
              bgColor={"#FCA201"}
              title={"Build Using"}
              subTitle={"React"}
            />
          </div>
          <TodoContainer/>
        
        </div>
      </div>
    </div>
  );
}

export default App;
