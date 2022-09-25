import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/Login/action";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch=useDispatch()
  const reduxUser=useSelector(store=>store.auth.user)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("/login", user).then((res) => {
      alert("login successful ");
   localStorage.setItem("user",JSON.stringify(res.data))
   dispatch(userLogin(res.data))
      navigate("/main")
    });
  };

  return (
      <div className="l1">
        <h1>Welcome!</h1>
        {/* <h3>Enter your Mail id</h3> */}

        <input
          className="mail"
          type="text"
          name="email"
          value={user.email}
          placeholder="Enter Your E-mail id"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          className="mail"
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter Your Password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="l2" onClick={login}>
          Log in
        </button>
        <br />
        <br />
        <div>Or log in with</div>
        <br />
        <div className="l3">
          <button className="Gbtn1">
            <img
              className="img1"
              src="https://i.ibb.co/PFnVMG7/Screenshot-2022-03-30-220226.png"
              alt=""
            />
          </button>
          <button className="Gbtn2">
            <img
              className="img2"
              src="https://i.ibb.co/1fNJnVd/Screenshot-2022-03-30-215245.png"
              alt=""
            />
          </button>
        </div>
        <br />
        <br />
        {/* <Link to ="signup">Sign up</Link> */}
        <label className="label" htmlFor="">
          Don't have an account?
        </label>
        <Link className="link" to="/signup">
          Register
        </Link>
      </div>
  );
};

export default Login;
