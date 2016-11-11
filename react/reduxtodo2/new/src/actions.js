let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
};

export const Toggle = (id) => {
  return {
    type: 'TOGGLE',
    id
  }
};

export const Remove = (id) => {
  return {
    type: 'REMOVE',
    id
  }
};
