import React from "react";

import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
const Landing = () => {
  const location = useLocation();
  console.log(location.state.userName);

  return (
    // <div>Hello {location.state.userName}</div>

    <div>
      <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-lg">
          <Header name={location.state.userName} />
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
          <TodoContainer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
