import React from "react";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const handelName = (e) => {
    setName(e.target.value);
  };
  const [pass, setPass] = useState("");
  const handelPassword = (e) => {
    setPass(e.target.value);
  };

  const [login, setLogin] = useState(false);
  const handelCheck = () => {
    let tempName = "syed";
    let tempPass = "1234";
    if (tempName == name && tempPass == pass) {
      setLogin(!login)
    }
  };
  return (
    <>
    {
         <div>
         <h1>Login</h1>
         <input
           type="text"
           value={name}
           onChange={handelName}
           placeholder="user name"
         />
         <br />
         <br />
         <input
           type="password"
           value={pass}
           onChange={handelPassword}
           placeholder="password"
         />
         <br />
         <br />
         <button onClick={handelCheck} >Login</button>
         </div>
    }
 
    </>
  );
};

export default Login;
