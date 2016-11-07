import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
//Set state
    this.state = {
      todos: [
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
        </div>
      </div>
    );
  }
}

export default App;
