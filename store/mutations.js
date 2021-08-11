export default {
  setTodo(state, payload) {
    state.todos = payload;
  },
  addTodo(state, payload) {
    console.log(state);
    state.todos.push(payload);
  },
  deleteTodo(state, index) {
    state.todos.splice(index, 1);
  }
};
