import { useState, useEffect } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";


function App() {

  const [userId, setUserId] = useState(null);
  const handleLogin = (userId) => {
    setUserId(userId);
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Login onlogin={handleLogin}/>} path="/"/>
        <Route element={<Signup/>} path="/signup"/>
        <Route element={<Todo userId={userId}/>} path="/todo"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
