import { SET_DATA } from "./action";
const initialState={data:[]}

export const alertReducer=(store = initialState, { type, payload })=>{
    switch(type){
        case SET_DATA:
            return {...store,data:payload}

        default:
            return store
    }

}