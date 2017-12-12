import {CHANGE_SEARCH_INPUT} from "../actions/todoActions";

function search(state = '', action) {
  switch (action.type) {
    case CHANGE_SEARCH_INPUT:
      return action.text;
    default:
      return state;
  }
}

export default search;