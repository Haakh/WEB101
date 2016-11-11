import React from 'react';
import TodoItem from './todo-list-item';

class TodoList extends React.Component {



  render() {


    return (<ul className="well well-sm list-group">
      <TodoItem />
     </ul>);
  }

}

export default TodoList;
