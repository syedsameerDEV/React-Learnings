import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Landing from "./Landing";
function App() {
  const [checkUser, setCheckUser] = useState([
    
  ]);
  console.log(checkUser);
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login users={checkUser} setUsers={setCheckUser}/>}></Route>
          <Route path="/signup" element={<Signup users={checkUser} setUsers={setCheckUser}/>}></Route>
          <Route path="/landing" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
