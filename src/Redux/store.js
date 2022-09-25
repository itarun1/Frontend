import { loginReducer } from "./Login/loginReducer";
import { combineReducers, createStore, compose,applyMiddleware} from "redux";
import { alertReducer } from "./AlertData/reducer";
const rootReducer=combineReducers({auth:loginReducer,alertData:alertReducer})
const loggerMiddleware = (store)=>(next)=>(action)=>{
    if(typeof action === "function"){
        return action(store.dispatch);
    }
    next(action);
}
export const store = createStore(rootReducer,compose(applyMiddleware(loggerMiddleware)))
