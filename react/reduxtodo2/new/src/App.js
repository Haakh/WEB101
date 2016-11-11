import React ,{ Component }  from 'react';
import TodoInput from './TodoInput';
import {  connect } from 'react-redux';
import TodoList from './TodoList';

class App extends Component{
    render()
  {
    return(
      <div className="row">
      <TodoInput  />
      <ul className="list-group">
      <TodoList />
      </ul>
      </div>
    );
  }
}
function mapstate(store){
  return{
    store
  }
}

export default connect(mapstate,null)(App);
