import { createStore } from "redux";
import  Addreducer from "../reducer/addreducer";
 
let store =createStore(
    Addreducer
)

export default store;