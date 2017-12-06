import {ADD_TODO, CHANGE_TODO_INPUT} from "../actions/todoActions";

const initialState = {
  todos: {
    todo: '',
    list: []
  }
};

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          list: [...state.todos.list, action.text]
        }
      };
    case CHANGE_TODO_INPUT:
      return {
        ...state,
        todos: {
          ...state.todos,
          todo: action.text
        }
      };
    default:
      return state;
  }
}