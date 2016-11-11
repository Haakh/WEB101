import React ,{Component}  from 'react';
import {addTodo}   from './actions';
import {  connect } from 'react-redux';
//        Dispatching text to store
let input;
class TodoInput extends Component{
  handleSubmit(event)
  {
    console.log("On input submit: " + input.value);
    this.props.dispatch(addTodo(input.value));
    input.value='';
    event.preventDefault();
  }
  render()
  {
    return(
      <div>
      <form className="input-group" onSubmit={this.handleSubmit.bind(this)}>
        <input className="form-control"ref={node => {
            input = node}}/>
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
