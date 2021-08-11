<template>
  <form
    @submit.prevent="onSubmit"
    class="flex flex-col items-center justify-center mx-auto border-2 border-gray-300 rounded-md lg:h-full sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-full px-2 space-y-5"
  >
    <p class="font-semibold text-gray-500 text-xl">Enter a todo here</p>
    <div
      class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 w-full"
    >
      <label
        for="title"
        class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
      >
        Title
      </label>
      <input
        v-model="todo.title"
        required
        type="text"
        name="title"
        id="title"
        class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
      />
    </div>
    <div
      class="relative border border-gray-300 rounded-md px-5 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 w-full"
    >
      <label
        for="date"
        class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
      >
        Date
      </label>
      <input
        v-model="todo.date"
        required
        type="date"
        name="date"
        id="date"
        class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
      />
    </div>
    <div
      class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 w-full"
    >
      <label
        for="desc"
        class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
      >
        Description
      </label>
      <textarea
        v-model="todo.desc"
        required
        type="text"
        name="desc"
        id="desc"
        rows="6"
        class="block w-full resize-none border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
      />
    </div>
    <div class="flex justify-between w-full pb-5">
      <button
        @click="reset"
        type="button"
        class="items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
      >
        Reset
      </button>
      <button
        type="submit"
        class="items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        title: "",
        date: "",
        desc: "",
        completed: false
      }
    };
  },
  methods: {
    reset() {
      this.todo = {
        title: "",
        date: "",
        desc: "",
        completed: false
      };
    },
    onSubmit() {
      console.log(this.todo);
      this.$emit("addTodo", this.todo);
      this.reset();
    }
  }
};
</script>
