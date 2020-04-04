import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

class App extends React.Component {
  state = {
    items: [
      { id: 1, title: "wakeup" },
      { id: 2, title: "wash myself" },
      { id: 3, title: "make breakfast" }
    ],
    id: uuidv4(),
    item: "",
    editItem: false
  };
  // initial states
  handleChange = e => {
    console.log("handle change");
  };
  handleSubmit = e => {
    console.log("handle submit");
  };
  clearList = () => {
    console.log("clear list");
  };
  handleDelete = id => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
          </div>
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
