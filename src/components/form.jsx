
import axios from "../axios";
import { useState } from "react";
 const Form = () => {
  const [data, setData] = useState({
    name: "",
    criteria: "",
    value: "",
    days: "",
    email:"",
    phone: "",
  });

 const handleChange=(e)=>{
  const { className, value } = e.target;
  setData({ ...data, [className]: value });
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("https://backend-assignment.onrender.com/formData", data).then((res) => {
    alert("User Created");
  });
};

  return (
    <div className="addMeetupContainer">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h1>Create Alert</h1>
        <input type="text" placeholder="Name" className="name" onChange={(e) => { handleChange(e)}} required />
        <br />
        <br />
        <label>Criteria</label>
        <br />
        <div className="radio">
        <input type="radio" value="Male" name="criteria" /> Male
        <input type="radio" value="Female" name="criteria" /> Female
        </div>
        <br/>
        <input
          type="text"
          className="value"
          onChange={(event) => { handleChange(event)}}
          placeholder="Value"
          required
        />
        <br />
        <select className="days" onChange={(event) => {handleChange(event) }}>
          <option value="Sun">Sunday</option>
          <option value="Mon">Monday</option>
          <option value="Tue">Tuesday</option>
          <option value="Wed">Wednesday</option>
          <option value="Thur">Thursday</option>
          <option value="Fri">Friday</option>
          <option value="Sat">Saturday</option>
          <option value="Sun,Mon,Tue,Wed,Thur,Fri,Sat">EveryDay</option>
        </select>
        <br />
        <label>Criteria</label>
        <br />
        <select className="criteria" onChange={(event) => {handleChange(event) }}>
          <option value="1">Dk-1</option>
          <option value="2">Dk-2</option>
          <option value="3">Dk-gas</option>
        </select>
        <input
          type="text"
          className="email"
          onChange={(event) => {handleChange(event) }}
          placeholder="Email"
          required
        />
        <br />
       
        <input
          type="number"
          className="phone"
          placeholder="Phone"
          onChange={(event) => {handleChange(event) }}
          required
        />
        <br />
        <input className="submitForm"  type="submit" />
      </form>
    </div>
  );
};

export default Form