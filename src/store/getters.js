const reverseMessage = (state) => {
  return state.message.split('').reverse().join('');
}

const storedTodoItems = (state) => {
  return state.todoItems;
}

export { reverseMessage, storedTodoItems };