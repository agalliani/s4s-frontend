<template>
  <div id="app">
    <LoginTeacher />
  </div>
</template>

<script>
import LoginTeacher from "./components/LoginTeacher.vue";

export default {
  name: "App",
  components: {
    LoginTeacher,
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
