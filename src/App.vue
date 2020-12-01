<template>
  <div id="app">
    <div v-if="loginEnabled">
      <LoginTeacher />
    </div>
    <div v-else>
      <!-- <DashboardTeacher /> -->
      <LiveCourse />
    </div>
  </div>
</template>

<script>
// import DashboardTeacher from "./components/DashboardTeacher.vue";
import LiveCourse from "./views/LiveCourse.vue"
import LoginTeacher from "./components/LoginTeacher.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    // DashboardTeacher,
    LiveCourse,
    LoginTeacher,
  },

  computed: {

  },
  data: () => ({
      loginEnabled: false,
  }),
  methods: {
    ...mapActions(["setClassrooms", ]),
  },
  mounted() {
    this.setClassrooms();
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
