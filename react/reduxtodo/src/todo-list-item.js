import React from 'react';

class TodoItem extends React.Component {

  onDeleteHandler() {
    this.props.onDeleteItem(this.props.index);
  }

  onCheckHandler() {
    this.props.onCheckItem(this.props.index);
  }

  render() {

      let obj ={checked : this.props.isCompleted}
      return <li   id="listitem" className="strikeThrough list-group-item">
                <input type="checkbox" {...obj} onClick={this.onCheckHandler.bind(this)}/>
                  <span  id="listitem">
                    {this.props.caption}
                  </span>
                <input type="button" className="btn btn-danger" value="Delete" onClick={this.onDeleteHandler.bind(this)} />
          </li>;
    }
}

export default TodoItem;
