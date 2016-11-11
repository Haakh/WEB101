import React from 'react';
import { connect } from 'react-redux';
import addTodo from './actions';

let input;
class UserInput extends React.Component {

  // constructor(props,context) {
  //   super()
  //   this.state = {
  //     inputText: ''
  //   }
  // }

  // handleChange(event) {
  //   this.setState({
  //     inputText: event.target.value
  //   })
  // }

  handleSubmit() {
    this.props.dispatch(addTodo(input.value));
  }

render(){
  let input;
  return (
    <div>
      <input ref={node => {
        input = node}}/>
      <input type="submit" onClick={this.handleSubmit.bind(this)} value="Add"/>
    </div>
  );

}
}




function mapDispatch(dispatch){
  return {
    addTodo: function(x) {
      dispath(addTodo(x))
    }
  }
}

export default connect(null,mapDispatch)(UserInput);




  // constructor() {
  //
  //   super();
  //
  //   this.state = {
  //     input: 'Enter Your Task'
  //   };
  //
  // }

  // onSubmitHandler(event) {
  //   event.preventDefault();
  // }
  //
  // onChangeHandler(e){
  //   this.setState({input: e.target.value})
  // }



  //
  //
  //
  // {(event) => {
  //   this.props.dispatch({
  //     type: 'ADD_TODO',
  //     caption: 'test',
  //     id: this.props.nextId++
  //   });
  //


//
//   render() {
//
//
//     return <div>Hello </div>;
//   }
//
// }
//
