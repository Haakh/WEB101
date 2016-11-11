let nextId = 0;

export const addTodo = (caption) => {
  return {
    type: 'ADD_TODO',
    caption,
    id: nextId++
  }
}


export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export default nextId 
