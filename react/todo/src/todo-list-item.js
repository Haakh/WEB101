import React from 'react';


class TodoItem extends React.Component {


  onDeleteHandler() {
    this.props.onDeleteItem(this.props.index);
  }



  render() {
    return <li>
      [{this.props.isCompleted ? 'Completed': 'Incomplete'}] {this.props.caption}
      <input type="button" value="Delete" onClick={this.onDeleteHandler.bind(this)} />
      </li>;
  }

}

export default TodoItem;
