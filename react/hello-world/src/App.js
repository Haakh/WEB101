import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
//Set state
    this.state = {
      todoItems: [
        {

        }
      ]
    };
  }


  render() {
    return (
      <div className="container">
        <div className="container-fluid">

          <h2>Todo App</h2>
          <UserInput onAddItem={this.onAddItemHandler.bind(this)}  />
        </div>

        <TodoList items = {this.state.todoItems} onDeleteItem = {this.onDeleteHandler.bind(this)} />
      </div>
    );
  }
}

export default App;
