import {combineReducers} from "redux";

import todos from './todoReducers';
import search from './searchReducers';

const todoApp = combineReducers({
  todos,
  search
});

export default todoApp;