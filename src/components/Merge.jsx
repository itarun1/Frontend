import React from 'react'
import {Sidebar} from "./Sidebar";
import Form from "./form";
import { Formdata } from "./formdata";
import Charts from "./Charts";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/Login/action";
import Router from "../Router/Router";


export const Merge = () => {
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
    <div className="container">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="show">
      <div className="showcontainer">
        <div className="charts">
          <Charts />
        </div>
        <div className="downform">
          <div className="form">
            <Form />
          </div>
          <div className="formdata">
            <Formdata />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


