import React, { Component } from 'react';
import {  connect } from 'react-redux';
import {Toggle}   from './actions';
import {Remove}   from './actions';
import { bindActionCreators } from 'redux';


class TodoList  extends Component
{
  onCheck(id){
    this.props.dispatch(Toggle(id));
  }
  render()
  {
  return(
    <ul className="well well-sm">

    {this.props.todos.map(todo =>
        <li id="listitem" className={todo.isCompleted?'strikeThrough list-group-item disabled':'list-group-item noStrike'} key={todo.id}>
        <input type="checkbox" onClick={()=>{ this.props.toggle(todo.id) }}/>
        <span id="listitem">
        {todo.caption}
        </span>
        <input type="button" className="btn btn-danger" value="Delete" onClick={()=>{ this.props.remove(todo.id) }} />
        </li>
    )}
    </ul>
        );
  }
}


function mapstate(store){
  return {
    todos: store
  }
}

function mapDispatch(dispatch){
  return {
    toggle: (id) =>{
      dispatch(Toggle(id));
    },
    remove: (id) =>{
      dispatch(Remove(id));
    }
  };
}


export default connect(mapstate,mapDispatch)(TodoList);
