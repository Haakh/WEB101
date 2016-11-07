import React, { Component } from 'react';
import logo from './logo.svg';
// import TodoInput from './todo-input';
// import TodosList from './todos-list';
import './App.css';

// const todos = [
//   {
//     task: 'One',
//     isCompleted: false
//   },
//   {
//     task: 'Two',
//     isCompleted: true
//   }
// ];
var TodoItems = React.createClass({
  render: function() {
    var todoEntries = this.props.entries;

    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }

    var listItems = todoEntries.map(createTasks);
    return (
      <ul className="theList">
        {listItems}
      </ul>
);
    }

});


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  }
  getInitialState() {
    return {
      items: []
    };
  }

  addItem(e) {
    var itemArray = this.state.items;

      itemArray.push(
        {
          text: this._inputElement.value,
          key: Date.now()
        }
      );

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";

      e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <form onSubmit ={this.addItem}>
          <input type ="text" id ="inp" placeholder="Enter Next task" ref={(a) => this._inputElement = a}/>
          <button>Enter</button>
        </form>


        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}

export default App;
