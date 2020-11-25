<template>
  <div id="app">
    <DashboardTeacher />
  </div>
</template>

<script>
import DashboardTeacher from "./components/DashboardTeacher.vue";
export default {
  name: "App",
  components: {
    DashboardTeacher,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>