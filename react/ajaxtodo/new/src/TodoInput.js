import React ,{Component}  from 'react';
import {addTodo}   from './actions';
import {  connect } from 'react-redux';
//        Dispatching text to store
let input;
let ind =0;

class TodoInput extends Component{

  handleSubmit(event)
  {
    console.log("On input submit: " + input.value);
    this.props.dispatch(addTodo(input.value));
    input.value='';
    event.preventDefault();
  }
tick() {
  console.log("It did mount" + ind++);
}

  componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}


componentWillUnmount() {
  clearInterval(this.timerID);
  console.log("Will mount");
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
