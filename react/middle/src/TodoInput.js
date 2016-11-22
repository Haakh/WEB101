import React ,{Component}  from 'react';
import {addTodo}   from './actions';
import {  connect } from 'react-redux';
import $ from 'jquery';
//        Dispatching text to store
let input;
function addItem(x) {
  let date = Date.now();
  return dispatch => {
  $.ajax({
    type: 'POST',
    dataType: 'json',
    async: true,
    url: 'http://train.local.sahusoft.info/newsync.php',
    data: {data:x, type:'ADD', time: date}
  }).then(dispatch(addTodo(x,date)));

  }
}

class TodoInput extends Component{


  handleSubmit(event)
  {
    // console.log("On input submit: " + input.value);
    event.preventDefault();

    this.props.dispatch(addItem(this.input.value));
    this.input.value='';
  }


  render()
  {
    return(
      <div>
      <form className="input-group" onSubmit={this.handleSubmit.bind(this)}>
        <input placeholder="Enter New Task" className="form-control" ref={node => {
            this.input = node}}/>
        <span className="input-group-btn">
              <input type="submit" className="btn btn-default" value="Add item" />
        </span>
      </form>
      </div>
    );
  }
}


function mapDispatch(dispatch){
  return {
    dispatch
  }
}
export default connect(null,mapDispatch)(TodoInput);
