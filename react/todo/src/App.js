import React, { Component } from 'react';
import logo from './logo.svg';
// import TodoInput from './todo-input';
// import TodosList from './todos-list';
import './App.css';

import TodoList from './todo-list';
import UserInput from './user';


class App extends React.Component {

  constructor() {

    super();

    this.state = {
      todoItems: [
        {
          caption: "First",
          isCompleted: true
        }
      ]
    };

  }

  onAddItemHandler(itemCaption){

    this.state.todoItems.push({
      caption: itemCaption,
      isCompleted: false
    });

    this.forceUpdate();

  }

  onDeleteItemHandler(index) {

    this.state.todoItems.splice(index, 1);
    this.forceUpdate();

  }

  render() {
    return <div>
      <UserInput onAddItem={this.onAddItemHandler.bind(this)} />
      <TodoList items={this.state.todoItems} onDeleteItem={this.onDeleteItemHandler.bind(this)} />
    </div>;
  }

}

export default App;
















































// import React, { Component } from 'react';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div >
//         <p>Hello</p>
//       </div>
//     );
//   }
// }
//
// export default App;



// import React, { Component } from 'react'
// import { createStore, combineReducers } from 'redux'
// // import { Provider } from 'react-redux'
//
// //Reducer 1
//
// var reducer_0 = function(state = {}, action) {
//   switch(action.type){
//     case 'ADD_ITEM':
//           return {
//             ...state,
//             caption: action.caption
//           }
//
//     default:
//           return state;
//   }
// }
//
//
// //Reducer 2
// var reducer_1 = function(state = {},action) {
//   switch(action.type){
//     case 'TOGGLE':
//             return {
//               ...state,
//               isCompleted: action.isCompleted
//             }
//     default:
//             return state;
//   }
// }
//
// //Merge those 2 reducers
//
// var reducer = combineReducers({
//     add: reducer_0,
//     toggle: reducer_1
// })
// //
// //
// //Create the store
// var store = createStore(reducer)
//
// // //Dispatch Store
// // store.dispatch({
// //     type: 'AN_ACTION'
// // })
//
//
// console.log('Store state at first:', store.getState())
//
// //Actions
// var addItem = function (caption) {
//   return {
//     type: 'ADD_ITEM',
//     caption: caption
//   }
// }
//
// var toggle = function (flag) {
//   return {
//     type: 'TOGGLE',
//     isCompleted: flag
//   }
// }
//
//
// //Dispatch
// store.dispatch(addItem('First todo item'))
// store.dispatch(toggle(false))
//
//
// console.log('Store state after item addition:', store.getState())
//
//
// //Presentation
// class App extends Component {
//   render() {
//     return (
//       <div >
//         <p>Hello</p>
//         as
//       </div>
//     );
//   }
// }
// export default App
