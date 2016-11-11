function getId(state) {
  return state.reduce((maxId, todo) => {
    return Math.max(todo.id,maxId)
  }, -1) + 1
}

//Reducers


let reducerTodo = function(state = [] ,action) {
  switch(action.type) {
    case 'ADD_TODO' :
      return [
        ...state,
        {
          caption : action.text,
          isCompleted : false,
          id: getId(state)
        }
      ];
    case 'TOGGLE' :
      return state.map(todo => {
        if(todo.id !== action.id){
          return todo;
        }

        return {
          ...todo,
          isCompleted: !action.isCompleted
        };
      });

    default:
      return state;
  }
}

export default reducerTodo
