import React, {Component} from 'react';

import TodoList from './todos-list';
import UserInput from './user';
import $ from 'jquery';

class App extends Component {

  constructor() {

    super();

    this.state = {
      todoItems: []
    };

  }

  onAddItemHandler(itemCaption){

    this.state.todoItems.push({
      caption: itemCaption,
      isCompleted: false

    });

    this.forceUpdate();


    $.ajax({
      type: 'POST',
      dataType: 'json',

      url: 'http://train.local.sahusoft.info/newsync.php',
      data: {data:itemCaption, type:'ADD'},
      success: function(data) {
        console.log(data);
      }
    });

    // var data = JSON.parse

  }

  onDeleteItemHandler(index) {

    this.state.todoItems.splice(index, 1);
    this.forceUpdate();

    $.ajax({
      type: 'POST',
      dataType: 'json',

      url: 'http://train.local.sahusoft.info/newsync.php',
      data: {type:'REMOVE', ind : index},
    });


  }

  onCheckItemHandler(index){
    var x=this.state.todoItems[index].isCompleted;

    this.state.todoItems[index].isCompleted =!x;
    this.forceUpdate();

    $.ajax({
      type: 'POST',
      dataType: 'json',

      url: 'http://train.local.sahusoft.info/newsync.php',
      data: {type:'TOGGLE', ind : index},
      success: function(data) {
        console.log(data);
      }
    });

  }

  componentWillMount() {
    let that = this;
    $.ajax({
      type: 'POST',
      url: 'http://train.local.sahusoft.info/fetch.php',
      success: function(data) {
        if(data!=null)
          that.setState({todoItems:data});

      },
      data: JSON.stringify(that.state.todoItems),
      dataType: 'json'
    })

    // console.log(x[0].caption);
    // this.setState({todoItems:x});
  }

  render() {
    return (<div ref="addHere" className="row">
      <UserInput onAddItem={this.onAddItemHandler.bind(this)} />
      <ul className="list-group">
        <TodoList items={this.state.todoItems} onCheckItem={this.onCheckItemHandler.bind(this)} onDeleteItem={this.onDeleteItemHandler.bind(this)} />
      </ul>
    </div>);
  }

}


export default App;
