
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = (props) => {
    const navigate = useNavigate();
    const user = props.users;
    const setUser = props.setUsers;
  
    // get the register user name password from input
    const [signupName, setSignupName] = useState("");
    const [signupPass, setSignupPass] = useState("");
  
    const handelSignupName = (e) => {
      setSignupName(e.target.value);
    };
    const handelSignupPass = (e) => {   
      setSignupPass(e.target.value);
    };
  
    const handelSignup = () =>{
      setUser([...user,{userName:signupName,password:signupPass}])
      navigate('/')
    }
  
  return (
    <div className="bg-black p-10">
    <div className="bg-[#EFEFEF] p-10 border  rounded-lg">
      <h1 className="text-3xl font-medium">Hey hi </h1>
      <p>Sign up here :)</p>
      <div className="flex flex-col gap-2 my-2">
        <input
          type="text"
          className="w-52 border-black p-1 bg-transparent border rounded-lg"
          placeholder="Username"
          onChange={handelSignupName}
        />
        <input
          type="text"
          className="w-52 border-black p-1 bg-transparent border rounded-lg"
          placeholder="Password"
          onChange={handelSignupPass}
        />
        <input
          type="text"
          className="w-52 border-black p-1 bg-transparent border rounded-lg"
          placeholder="Conform Password"
        />
        <button className="bg-[#e8a247] w-24 p-1 rounded-md" onClick={handelSignup}>SignUp</button>
        <p>
          Already have an account?{" "}
          <Link to={"/"} className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Signup