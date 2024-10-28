import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("sameer");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounted....!");
    console.log({
      value,
      count,
    });

    return () => {
      console.log("Unmounted...!");
    };
  }, [value]);
  return (
    <>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(() => {
            return "react";
          });
          setCount(count + 1)
          
          setCount((prev)=>{
            return  prev + 1
          })
        }}
      >
        Click me
      </button>
    </>
  );
};

export default App;
