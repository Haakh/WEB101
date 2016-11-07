import React from 'react';
import _ from 'lodash';
import TodosListItem from './todo-list-item';
export default class TodosList extends React.Component {
  renderItems(){
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={
      index}{...todo} />);
  }

  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          {this.renderItems()}
        </tr>
        </tbody>
      </table>
    );
  }
}
