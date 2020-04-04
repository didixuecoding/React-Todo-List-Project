import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>TodoList</h2>
        <TodoItem />
      </div>
    );
  }
}

export default TodoList;
