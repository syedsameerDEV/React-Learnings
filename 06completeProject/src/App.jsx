import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

function App() {
  const [checkUser, setCheckUser] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login users={checkUser} setUsers={setCheckUser} />}
          />
          <Route
            path="/signup"
            element={<Signup users={checkUser} setUsers={setCheckUser} />}
          />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
