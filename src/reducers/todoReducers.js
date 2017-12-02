import {ADD_TODO, CHANGE_SEARCH_INPUT, CHANGE_TODO_INPUT} from "../actions/todoActions";

const initialState = {
  search: '',
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
    case CHANGE_SEARCH_INPUT:
      return {
        ...state,
        search: action.text
      };
    default:
      return state;
  }
}