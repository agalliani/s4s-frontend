import Vue from "vue";
import VueRouter from "vue-router";
import InstructionPage from "../components/InstructionPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "instructions",
    component: InstructionPage,
  },
  {
    path: "/classroom-management",
    name: "classroom-management",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ClassroomManagement.vue"),
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
