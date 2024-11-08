import React from "react";

const Card = (props) => {
  return (
    <div
      style={{ backgroundColor: props.bgColor}}
      className="px-10 py-5 border rounded-md text-center flex-grow"
    >
      <h1 className="font-medium 2xl:">{props.title}</h1>
      <p>{props.subTitle}</p>
    </div>
  );
};

export default Card;
