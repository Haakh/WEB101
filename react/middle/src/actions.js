let nextTodoId = 0;


export const addTodo = (caption,date) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    caption,
    time: date
  }
};

export const GetTodo = (data) => {
  nextTodoId = data.length;
  return {
    type: 'GET_DATA',
    data
  }
};


export const Toggle = (time) => {
  return {
    type: 'TOGGLE',
    time
  }
};

export const Remove = (time) => {

  return {
    type: 'REMOVE',
    time
  }
};
