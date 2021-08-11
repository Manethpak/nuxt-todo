<template>
  <header class="bg-yellow-500">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="w-full py-3 flex items-center justify-between border-b border-yellow-400 lg:border-none"
      >
        <div class="flex items-center">
          <nuxt-link to="/">
            <span class="sr-only">Todo</span>
            <outline-code-icon class="w-10 h-10 text-yellow-50" />
          </nuxt-link>
          <div class="hidden ml-10 space-x-8 lg:block">
            <nuxt-link
              v-for="link in navigation"
              :key="link.name"
              :to="link.to"
              class="text-base font-medium text-white hover:text-yellow-50"
            >
              {{ link.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <nuxt-link
          v-for="link in navigation"
          :key="link.name"
          :to="link.to"
          class="text-base font-medium text-white hover:text-yellow-50"
        >
          {{ link.name }}
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" }
];

export default {
  data() {
    return {
      navigation
    };
  }
};
</script>
