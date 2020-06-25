<template>
  <div
    class="absolute z-50 left-0 inset-y-0 w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-400 dark:border-gray-600 overflow-y-auto transform duration-200"
    :class="
      isSidebarOpen
        ? 'translate-x-0 ease-out'
        : '-translate-x-full ease-in'
    "
  >
    <div class="flex items-center justify-end p-4">
      <button class="text-gray-700 hover:text-gray-900 text-lg" @click="closeSidebar">
        <fa icon="times"/>
      </button>
    </div>

    <div class="flex flex-col space-y-4 px-4 mt-4">
      <nuxt-link
        to="/"
        class="px-4 py-2 mx-4 focus:shadow-outline focus:outline-none rounded-lg"
      >Index</nuxt-link>

      <nuxt-link
        to="/about"
        class="px-4 py-2 mx-4 focus:shadow-outline focus:outline-none rounded-lg"
      >About</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",

  computed: {
    isSidebarOpen() {
      return this.$store.state.sidebar.open;
    }
  },

  methods: {
    closeSidebar() {
      this.$store.commit("sidebar/toggle", false);
    }
  }
};
</script>

<style>
.nuxt-link-exact-active {
  @apply bg-gray-300 font-medium;
}
</style>
