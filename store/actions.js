export default {
  nuxtServerInit({ commit }, context) {
    return context.app.$axios
      .$get("/api/todos.json")
      .then(data => {
        const array = [];
        for (const key in data) {
          array.push({ ...data[key], id: key });
        }
        commit("setTodo", array);
      })
      .catch(e => context.error(e));
  },

  addTodo({ commit }, todo) {
    this.$axios
      .post("/api/todos.json", todo)
      .then(() => {
        commit("addTodo", todo);
      })
      .catch(e => alert(e));
  },

  deleteTodo({ commit }, { id, index }) {
    this.$axios
      .delete(`/api/todos/${id}.json`)
      .then(() => commit("deleteTodo", index))
      .catch(e => alert(e));
  }
};
