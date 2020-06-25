<template>
  <div class="min-h-screen h-full w-full">
    <div
      v-if="isSidebarOpen"
      class="lg:hidden fixed z-40 inset-0 bg-black opacity-50"
      @click="closeSidebar"
    ></div>

    <Sidebar/>

    <div>
      <header>
        <nav class="container px-6 lg:px-8 py-4 mx-auto">
          <button class="text-gray-700 hover:text-gray-900 text-lg" @click="openSidebar">
            <fa icon="bars"/>
          </button>
        </nav>
      </header>

      <div class="flex-grow flex flex-col items-center justify-center space-y-4">
        <Logo :height="100" :width="100"/>
        <h1 class="text-indigo-900 text-2xl font-bold">Nuxt.js Sidebar Navigation Example</h1>

        <Nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
import Sidebar from "~/components/Sidebar";

export default {
  middleware: ["sidebar"],

  components: {
    Logo,
    Sidebar
  },

  computed: {
    isSidebarOpen() {
      return this.$store.state.sidebar.open;
    }
  },

  methods: {
    openSidebar() {
      this.$store.commit("sidebar/toggle", true);
    },

    closeSidebar() {
      this.$store.commit("sidebar/toggle", false);
    }
  }
};
</script>
