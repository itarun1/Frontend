import axios from "axios";


const instance = axios.create({
    baseURL: "https://backend-assignment.onrender.com", 
    headers: {
      'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('user')) || ''}`
    }
  })

  export default instance;