import React from 'react'
import {Sidebar} from "./Sidebar";
import Form from "./form";
import { Formdata } from "./formdata";
import Charts from "./Charts";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/Login/action";
import { getAlerts } from '../Redux/AlertData/action';


export const Merge = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [query,setQuery]=React.useState({page:1,size:4})
    React.useEffect(()=>{
      dispatch(getAlerts({page:query.page,size:query.size}))
   },[query])
    useEffect(() => {
      const User = JSON.parse(localStorage.getItem("user"));
      if (User) {
        dispatch(userLogin(User));
      } else {
        navigate("/");
      }
    }, []);
    const paging=(page)=>{
      setQuery({page:page,size:4})
    }
  return (
    <div className="container">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="show">
    <div className="showheader">
      <div className="showleft"><h2>Peak Shaving and Alert</h2></div>
      <div className="showright"><ul>
        <li>Carisberg Group</li>
        <li><span><i class="fa-solid fa-location-pin"></i></span></li>
        </ul></div>
    </div>
      <div className="showcontainer">
        <div className="charts">
          <Charts />
        </div>
        <div className="downform">
          <div className="form">
            <Form query={query}/>
          </div>
          <div className="formdata">
            <Formdata query={query} paging={paging}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


