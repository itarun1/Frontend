
import React,{  useState } from "react";
import { useDispatch } from "react-redux";
import { postAlert } from "../Redux/AlertData/action";

 const Form = ( query) => {
  const dispatch=useDispatch()
  const [data, setData] = useState({
    name: "",
    priceSignal:"Dk-1",
    criteria: "",
    value: "",
    days: "Sun",
    email:"",
    phone: "",
  });

 const handleChange=(e)=>{
  const { className, value } = e.target;
  setData({ ...data, [className]: value });
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(postAlert({payload:data,page:query.page,size:query.size}))
};

  return (
    <div className="formContainer">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h1>Create Alert</h1>
        <input type="text" placeholder="Name" className="name" onChange={(e) => { handleChange(e)}} required />
        <br />
        <br />
        <label>Criteria</label>
        <br />
        <div className="criteria"  onChange={(e) => { handleChange(e)}}>
        <input type="radio" value="Greater than" name="criteria" className="criteria" required/> Greater
        <input type="radio" value="Less than" name="criteria" className="criteria"  required/> Less
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
        <select className="days" onChange={(event) => {handleChange(event) }} required>
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
        <select className="priceSignal" onChange={(event) => {handleChange(event) }} required>
          <option value="Dk-1">Dk-1</option>
          <option value="Dk-2">Dk-2</option>
          <option value="Dk-gas">Dk-gas</option>
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
        <div className="btn-wrapper"><input className="submitForm"  type="submit" /></div>
      </form>
    </div>
  );
};

export default Form