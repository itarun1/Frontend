import axios from "axios";
let user=JSON.parse(localStorage.getItem('user'))
 const token=(user && user.token )||''
//  const url="http://localhost:3003"
 const url="https://backend-assignment.onrender.com"
const instance = axios.create({
    baseURL: url, 
    headers: {
      'authorization' : `Bearer ${ token|| ''}`
    }
  })

  export default instance;