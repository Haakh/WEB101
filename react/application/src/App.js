import React from 'react';

import TodoList from './todos-list';
import UserInput from './user';


class App extends React.Component {

  constructor() {

    super();

    this.state = {
      todoItems: [

      ]
    };

  }

  onAddItemHandler(itemCaption){

    this.state.todoItems.push({
      caption: itemCaption,
      isCompleted: false
    });

    this.forceUpdate();

  }

  onDeleteItemHandler(index) {

    this.state.todoItems.splice(index, 1);
    this.forceUpdate();

  }

  onCheckItemHandler(index){
    var x=this.state.todoItems[index].isCompleted;

/*


  this.setState((prev,props)=> ({
     todoItems.isCompleted : !x
   }));


   */
    this.state.todoItems[index].isCompleted =!x;
    this.forceUpdate();
  }


  render() {
    return (<div className="row">
      <UserInput onAddItem={this.onAddItemHandler.bind(this)} />
      <ul className= "list-group">
        <TodoList items={this.state.todoItems} onCheckItem={this.onCheckItemHandler.bind(this)} onDeleteItem={this.onDeleteItemHandler.bind(this)} />
      </ul>
    </div>);
  }

}


export default App;
