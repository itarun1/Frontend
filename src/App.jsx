import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "./Redux/Login/action";
import Router from "./Router/Router";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
  useEffect(() => {
    const User = JSON.parse(localStorage.getItem("user"));
    if (User) {
      dispatch(userLogin(User));
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div className="App">
   <Router/>
    </div>
  );
}

export default App;
