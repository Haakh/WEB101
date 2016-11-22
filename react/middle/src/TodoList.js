import React, { Component } from 'react';
import {  connect } from 'react-redux';
import {Toggle}   from './actions';
import {Remove}   from './actions';
import $ from 'jquery';
// import { bindActionCreators } from 'redux';

function deleteItem (time) {
  return dispatch => {
    $.ajax({
      type: 'POST',
      dataType: 'json',
      async: true,
      url: 'http://train.local.sahusoft.info/newsync.php',
      data: {time:time, type:'REMOVE'},
      success: function(x) {
        dispatch(Remove(time));
      }
    });

  }
}

function toggleItem (time) {
  return dispatch => {
    $.ajax({
      type: 'POST',
      dataType: 'json',
      async: true,
      url: 'http://train.local.sahusoft.info/newsync.php',
      data: {time:time, type:'TOGGLE'},
      success: function() {
        console.log("Toggled");
      }
    }).then(dispatch(Toggle(time)));

  }
}
class TodoList  extends Component
{
  // onCheck(id){
  //   this.props.dispatch(Toggle(id));
  // }
  render()
  {
  return(
    <ul className="well well-sm">

    {this.props.store.todored.map(todo =>
      
        <li id="listitem" className={todo.complete?'strikeThrough list-group-item disabled':'list-group-item noStrike'} key={todo.time} >
        <input type="checkbox" readOnly checked={todo.complete} onClick={()=>{ this.props.dispatch(toggleItem(todo.time)) }}/>
        <span id="listitem">
        {todo.caption}
        </span>
        <input type="button" className="btn btn-danger" value="Delete" onClick={()=>{ this.props.dispatch({type:'DELETING',index:todo.time});this.props.dispatch(deleteItem(todo.time)) }} />
        {todo.deleting?'Deleting...': ''}

        </li>
    )}
    </ul>
        );
  }
}


function mapstate(store){
  return {
    store
  }
}

function mapDispatch(dispatch){
  return {
    dispatch
  }
};



export default connect(mapstate,mapDispatch)(TodoList);
