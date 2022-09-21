import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "./Redux/Login/action";
import Router from "./Router/Router";
import { useNavigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
   <Router/>
    </div>
  );
}

export default App;
