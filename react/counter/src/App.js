import React ,{ Component }  from 'react';
// import TodoInput from './TodoInput';
import {  connect } from 'react-redux';
// import TodoList from './TodoList';
import Counter from './Counter';
//
// function increMent() {
//   return dispatch => {
//     setTimeout (() => {
//       dispatch({type: 'INC'})
//     },1000)
//   }
// };

class App extends Component{
  increMent() {
    return dispatch => {
      setTimeout (() => {
        dispatch({type: 'INC'})
      },1000)
    }
  };
    render()
  {
    return(
        <Counter
          value={this.props.store}
          onIncrement={()=>this.props.dispatch(this.increMent())}
          onDecrement={()=>this.props.dispatch({type : 'DEC'})}
        />
    );
  }
}
function mapstate(store){
  return{
    store
  }
}

function mapdispatch(dispatch){
  return{
    dispatch
  }
}


export default connect(mapstate,mapdispatch)(App);
