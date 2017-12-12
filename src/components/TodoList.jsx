import React, {Component} from "react";
import store from "../store";
import {addTodo, changeSearchInput, changeTodoInput} from "../actions/todoActions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    let state = store.getState();
    this.state = {
      todos: state.todos.list,
      todoInputText: state.todos.todo,
      searchInputText: state.search
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleTodoInput = this.handleTodoInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleSearchInput(evt) {
    store.dispatch(changeSearchInput(evt.target.value));
  }
  handleTodoInput(evt) {
    store.dispatch(changeTodoInput(evt.target.value));
  }
  handleClick() {
    store.dispatch(addTodo(this.state.todoInputText));
    store.dispatch(changeTodoInput(''));
  }
  render() {
    const self = this;
    const todoList = this.state.todos.map(function (todo, idx) {
      if (todo.includes(self.state.searchInputText)) {
        return <li key={idx}>{todo}</li>;
      }
      return null;
    });
    return (
      <div>
        <p>Search:</p>
        <input type="text" value={this.state.searchInputText} onChange={this.handleSearchInput}/>
        <br/>
        <p>New Todo:</p>
        <input type="text" value={this.state.todoInputText} onChange={this.handleTodoInput}/>
        <br/>
        <button type="button" onClick={this.handleClick}>Add</button>
        <ul>
          <li>{todoList}</li>
        </ul>
      </div>
    );
  }
  componentDidMount() {
    var self = this;

    store.subscribe(function () {
      let state = store.getState();
      self.setState({
        todos: state.todos.list,
        todoInputText: state.todos.todo,
        searchInputText: state.search
      });
    });
  }
}

export default TodoList;