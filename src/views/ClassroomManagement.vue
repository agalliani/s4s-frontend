<template>
  <v-container id="container-create">
    <v-row id="row-upper">
      <v-list id="list" class="center">
        <v-col>
          <v-list-item v-for="card in cards" :key="card.id">
            <v-list-item-content>
              <ClassCard
                :title="card.className"
                :id="card.id"
                :students="card.students"
              />
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-list>
    </v-row>

    <v-btn id="btn-add" fab @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="className"
                    :rules="nameRules"
                    :counter="10"
                    label="Class name"
                    required
                  ></v-text-field>

                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="primary" @click="addCard">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ClassCard from "../components/ClassCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "ClassroomManagement",
  components: {
    ClassCard,
  },

  data() {
    return {
      show: false,
      dialog: false,
      valid: false,

      className: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
    };
  },
  computed: {
    ...mapGetters({ cards: "getClassrooms" }),
  },
  methods: {
    addCard() {
      this.dialog = true;

      let newCard = {
        id: Date.now(),
        className: this.className,
        
      };

      this.$store.dispatch("addNewClassroom", newCard);

      location.reload(); //perchè non funziona la chiamata action????
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

#list {
  width: 100%;
  /* background-color: #daecaf95; */
}
#container-create {
  height: 100%;
  /* background-color: lightgoldenrodyellow; */
}

#row-second {
  background-color: lightblue;
}

#row-upper {
  height: 90%;
  background-color: lightcyan;
}

#btn-add {
  /**color */
  background-color: green;
  color: white;

  bottom: 10px;
}

.v-list-item__content {
  padding: 12px;
}
</style>
