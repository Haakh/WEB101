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



import React from 'react';
// import { connect } from 'react-redux';

import UserInput from './user';
import TodoList from './todos-list';





class App extends React.Component {

  render() {
    return (
    <div className="row">
    <UserInput />
    <TodoList />
    </ div>
  )
  }
}

export default App
// function mapStateToProps(state) {
//   return state
// }
//
// export default connect(mapStateToProps,null)(App)




// function mapState(store){
//   return{
//     store
//   }
// }
//
//
// function mapDispatch(dispatch){
//   return {
//     dispatch
//   }
// }
//
// export default connect(mapState,mapDispatch)(App);
