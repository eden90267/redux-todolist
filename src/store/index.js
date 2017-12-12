import {applyMiddleware, createStore} from "redux";
import todoApp from "../reducers";
import thunk from "redux-thunk";

let store = createStore(todoApp, applyMiddleware(thunk));

export default store;