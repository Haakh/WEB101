const todos=(state=[],action)=>{
  switch (action.type) {
    case 'ADD_TODO':
    return[
      ...state,
      {
        id: action.id,
        caption: action.text,
        complete: false
      }
    ];

    case 'TOGGLE':
      return state.map(todo => {
        if(todo.id !== action.id){
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      });

      case 'REMOVE':
      console.log("Hello there");
      return state.filter(todo =>
        todo.id !== action.id
      )


    default:
      return state;
  }
};
export default  todos
