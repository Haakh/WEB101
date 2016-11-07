import React from 'react';
import _ from 'lodash';
export default class TodosListItem extends React.Component {
  render(){
    return (
      <form onSubmit ={this.handleCreate.bind(this)}>
        <input type ="text" id ="inp" placeholder="Enter Next task" ref = "createInput"/>
        <button>Enter</button>
      </form>
    );
  }
  handleCreate(event) {
    event.preventDefault();

    console.log(this.refs.createInput.value);
  }
}
