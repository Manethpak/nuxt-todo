<template>
  <div>
    <div class="grid xl:grid-cols-4 gap-2 mt-5">
      <!-- Form -->
      <div class="xl:col-span-1 xl:order-last h-96">
        <TodoForm @addTodo="addTodo" />
      </div>

      <div
        class="xl:col-span-3 flex flex-wrap xl:flex-row sm:flex-col sm:items-center h-auto sm:mt-5"
      >
        <TodoCard
          v-for="(todo, index) in todos"
          :key="todo.id"
          :id="todo.id"
          :title="todo.title"
          :date="todo.date"
          :desc="todo.desc"
          :completed="todo.completed"
          @delete="deleteTodo(todo.id, index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    addTodo(todo) {
      this.$store.dispatch("addTodo", todo);
    },
    deleteTodo(id, index) {
      this.$store.dispatch("deleteTodo", { id, index });
    }
  }
};
</script>
