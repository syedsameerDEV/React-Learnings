
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
  const user = props.users;
  const setUser = props.setUsers;
  const [loginMsg, setLoginMsg] = useState(true);

  // get name and password from input using hook
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };

  //functionality on while click on login

  const handelLogin = () => {
    let userFound = false;
    user.map((items) => {
      if (items.userName === name && items.password === password) {
        console.log("Login Successfully");
        userFound = true;
        navigate("/landing", {
          state: { userName: name },
        });
      }
      if (userFound === false) {
        console.log("Login Failed");
        setLoginMsg(false);
        navigate("/signup");
      }
    });
    setName("");
    setPassword("");
  };
  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border  rounded-lg">
        <h1 className="text-3xl font-medium">Hey hi </h1>
        {loginMsg ? (
          <p>I help you manage your activities after you login :)</p>
        ) : (
          <p className="text-red-400">Please Sign Up Before you Login</p>
        )}
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-lg"
            value={name}
            placeholder="Username"
            onChange={handelName}
          />
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-lg"
            value={password}
            placeholder="Password"
            onChange={handelPassword}
          />

          <button
            className="bg-[#8272DA] w-24 p-1 rounded-md"
            onClick={handelLogin}
          >
            Login
          </button>
          <p>
            You don't have an account?{" "}
            <Link to={"/signup"} className="underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
