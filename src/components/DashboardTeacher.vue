<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Nome Docente
          </v-list-item-title>
          <v-list-item-subtitle>
            Istituto
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Sorint for School</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "Dashboard Teacher",
    mounted() {
        this.setNotLogin();
    },
  data: () => ({
    drawer: null,
    items: [
      { title: "Classroom Management", icon: "mdi-view-dashboard", to: '/classroom-management'},
      { title: "About", icon: "mdi-help-box", to: '/about' }
    ]
  }),
  methods: {
      ...mapActions(["setNotLogin"]),
  }
};
</script>

<style>
.v-toolbar__content {
  background-color: #f37021;
}
</style>
