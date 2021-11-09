<template>
  <div id="app">
   <div class="wrapper">
        <Navbar />
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/UI/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>

<style>
  #content {
      width: 100%;
      padding: 20px;
      padding-left: 250px;
      min-height: 100vh;
  }
</style>

