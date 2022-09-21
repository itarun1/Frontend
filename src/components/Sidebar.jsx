import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { userLogin } from "../Redux/Login/action";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout=() => {
    const User = JSON.parse(localStorage.getItem("user"));
    if (User) {
      dispatch(userLogin(null));
    } 
      navigate("/");
  }
  
  return (
    <>
      <div className="postName">
        <h4>Grid Manager 2.0</h4>
        <p className="borderBottom"></p>
        <div className="imgAndName">
          <div>
            <img
              className="profilePic"
              src="https://via.placeholder.com/50"
              alt=""
            />
          </div>
          <div className="sldbr">
            <p>Hey, Tarun</p>
            <p className="userId">user_id:1212</p>
          </div>
        </div>
      </div>

      <div className="content">
        <p className="midl">Dashboard</p>
        <select name="Apps" className="midl">
          <option className="midl" value="">
            Apps
          </option>
          <option className="midl" value="">
            1
          </option>
          <option className="midl" value="">
            2
          </option>
          <option className="midl" value="">
            3
          </option>
          <option className="midl" value="">
            4
          </option>
        </select>
        <p className="midl">vsv</p>
        <p className="midl">fdsfs</p>
        <p className="midl">fdsfsd</p>
        <Link to ="/"><p className="midl" onClick={()=>logout} >LogOut</p></Link>
      </div>
    </>
  );
};


