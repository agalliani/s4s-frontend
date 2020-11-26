import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const url = "http://localhost:3000/classrooms";

export default new Vuex.Store({
  state: {
    classrooms: [],
  },
  mutations: {
    //synchronous
    SET_CLASSROOMS(state, payload) {
      state.classrooms = payload;
    },
    ADD_NEW_CLASSROOM(state, payload) {
      state.classrooms.push(payload);
    },
  },
  actions: {
    //asynchronous
    async setClassrooms(state) {
      const classrooms = await fetch(url);
      const c = await classrooms.json();
      state.commit("SET_CLASSROOMS", c);
    },
    async addNewClassroom(state, payload) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: payload.id,
          className: payload.className,
        }),
      };
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then("ADD_NEW_CLASSROOM", payload)
        .then(state.dispatch("setClassrooms")); //refresh data
    },
    async deleteClassroom(state, payload) {
      const requestOptions = {
        method: "DELETE",
      };
      fetch(url+"/"+payload, requestOptions)
      //.then(state.dispatch("setClassrooms")); //refresh data
    },
  },
  modules: {},
  getters: {
    getClassrooms(state) {
      return state.classrooms;
    },
  },
});
