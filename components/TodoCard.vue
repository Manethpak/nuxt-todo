<template>
  <div
    class="bg-white border-2 border-gray-200 shadow-sm rounded-lg w-full sm:w-8/12 md:w-6/12 xl:w-72 mr-2 mb-auto mt-2"
  >
    <div class="px-4 py-5 sm:p-6 flex flex-col xl:h-auto">
      <p class="text-xl text-yellow-500 font-semibold">
        {{ title }}
      </p>
      <p class="text-sm text-gray-600">Finish by - {{ date }}</p>
      <p class="text-gray-800">
        {{ desc }}
      </p>
      <div class="flex flex-row items-end justify-end space-x-4 mt-5">
        <div @click="$emit('delete')">
          <solid-trash-icon
            class="w-6 h-6 text-yellow-500 hover:text-yellow-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean
    }
  }
};
</script>
