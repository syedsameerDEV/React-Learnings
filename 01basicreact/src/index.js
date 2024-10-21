import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Books from "./Books";
import Chat from "./Chat";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Name(props) {
  return (
    <div
      style={{ backgroundColor: "skyBlue", padding: "10px", margin: "10px" }}
    >
      {/* {
        profileNames.map((items)=>{
          return <h1>{items}</h1>
        })
      } */}
      <h1> {props.myName}</h1>
      <p>Department {props.deparment}</p>
    </div>
  );
}

// let profileNames = ["jhon", "vicky", "sameer", "vimal", "vijay"];
// let dep = ["IT","EEE","CS","M-TECH","B-TECH"]

// array of object

let person = [
  { name: "jhon", department: "IT" },
  { name: "vicky", department: "EEE" },
  { name: "sameer", department: "CS" },
  { name: "vimal", department: "M-TECH" },
  { name: "vijay", department: "B-TECH" },
];

root.render(
  <div>
    <App />
    {/* array of array */}
    {/* {profileNames.map((items,index) => {
      return <Name myName={items} deparment = {dep[index]} />;
    })} */}
    {/* <Name myName/> */}

    {/* array of object */}
    {person.map((items) => {
      return <Name myName={items.name} deparment={items.department} />;
    })}
    <Books />
    <Chat />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
