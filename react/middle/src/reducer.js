const todoget = (index, data) =>{
  return {
    id: index,
    caption: data.caption,
    complete: data.complete,
    time: data.time
  };
}


const todos=(state=[],action)=>{
  switch (action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      {
        id: action.id,
        caption: action.caption,
        complete: false,
        deleting: false,
        time: action.time
      }
    ];

    case 'TOGGLE':
      return state.map(todo => {
        if(todo.time !== action.time){
          return todo;
        }

        return {
          ...todo,
          complete: !todo.complete
        };
      });

    case 'REMOVE':
      return state.filter(todo =>
        todo.time !== action.time
      );


    case 'GET_DATA':
      var x=action.data.map(function(obj, index){
          return todoget(index,obj)
          });
          // console.log(x);
      return x;

      // for (var i = 0; i < action.data.length; i++) {
      //   action.data[i]['id'] = i;
      // }
		  // return action.data;

    case 'DELETING':
        return state.map( x => {
          if(x.time !== action.index){
            return x;
          }
          return {
            ...x,
            deleting: !x.deleting
          }
        }
      )

    // case 'TOGGLING':
    //     return {
    //       ...state,
    //       loading:{
    //         load: true
    //       }
    //     }


    default:
      return state;
  }
};


export default  todos
