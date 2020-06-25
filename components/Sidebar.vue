<template>
  <div
    class="fixed md:sticky z-50 left-0 inset-y-0 w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-400 dark:border-gray-600 overflow-y-auto transform md:translate-x-0 duration-200"
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
      <nuxt-link to="/">Index</nuxt-link>

      <nuxt-link to="/about">About</nuxt-link>
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

