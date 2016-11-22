import React ,{ Component }  from 'react';
import TodoInput from './TodoInput';
import {  connect } from 'react-redux';
import TodoList from './TodoList';
import { GetTodo} from './actions';
import $ from 'jquery';

// function loadIt(dispatch) {
//   dispatch(load);
// }


function getdata(dispatch) {

    $.ajax({
      type: 'POST',
      url: 'http://train.local.sahusoft.info/fetch.php',
      success: function(data) {
        // dispatch(loadtoggle());
        // console.log("DATA RECIEVED");

        dispatch(GetTodo(data));
        dispatch({type:"GET_DATA_RECEIVED"});
      },
      data: JSON.stringify(),
      dataType: 'json'
    })
};



class App extends Component{

  componentWillMount() {
    this.props.dispatch({type:"GET_TODO_DATA"});
    this.props.dispatch(getdata);
  }
    render()
  {
    if(this.props.store.loadred){
        return(
          <div>
            <span>Loading...</span>
          </div>
      );}
    else{
        return(
          <div className="row">
          <TodoInput  />
          <ul className="list-group">
          <TodoList />
          </ul>
          </div>

    );}
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
