import React from 'react';
import TodoItem from './todo-list-item';


class TodoList extends React.Component {


  onDeleteItemHandler(index){
    this.props.onDeleteItem(index);
  }

  render() {

    var that = this;

    return <ul>
      {this.props.items.map(function(obj, index){
        return <TodoItem
          key={index}
          caption={obj.caption}
          isCompleted={obj.isCompleted}
          onDeleteItem={that.onDeleteItemHandler.bind(that)}
          index={index}
          />
      })}
    </ul>;
  }


}

export default TodoList;
