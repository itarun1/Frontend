import axios from "../../axios"
export const SET_DATA="SET_DATA"


// post alert
export const postAlert=({payload,page,size})=>dispatch=>{
    axios.post("/formData",payload)
        .then(()=>{
            dispatch(getAlerts({page,size}))
        })
}

// get alerts
export const getAlerts=({page=1,size=5})=>dispatch=>{
    axios.get(`/formData?page=${page}&size=${size}`)
        .then((res)=>{
            dispatch({type:SET_DATA,payload:res.data})
        })
}

// edit alert
export const editAlert=({id,page,size,data})=>dispatch=>{
    axios.patch(`/formData/${id}`,data)
        .then(()=>{
            dispatch(getAlerts({page,size}))
        })
}
// delete alert
export const deleteAlert=({id,page,size})=>dispatch=>{
    axios.delete(`/formData/${id}`)
        .then(()=>{
            dispatch(getAlerts({page,size}))
        })
}
