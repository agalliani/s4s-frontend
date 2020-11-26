<template>
  <div id="app">
    <div v-if="loginEnabled">
        <LoginTeacher />
    </div>
    <div v-else>
      <DashboardTeacher />
    </div>
  </div>
</template>

<script>
import DashboardTeacher from "./components/DashboardTeacher.vue";
import LoginTeacher from "./components/LoginTeacher.vue";

export default {
  name: "App",
  components: {
    DashboardTeacher,
    LoginTeacher
  },
  data: () => ({
    loginEnabled: false
  })
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
