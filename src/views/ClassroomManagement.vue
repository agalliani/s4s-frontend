<template>
  <v-container id="container-create">
    <v-row id="row-upper">
      <v-list id="list" class="center">
        <v-col>
          <v-list-item v-for="card in cards" :key="card.id">
            <v-list-item-content>
              <v-card class="classroom-card">
                <v-row>
                  <v-col class="center">
                    {{ card.className }}
                  </v-col>
                  <v-col md="2">
                    <v-btn>
                      Details
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
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
                  <v-text-field
                    v-model="studentname"
                    :rules="nameRules"
                    :counter="10"
                    label="Student name"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Student E-mail"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

          <small>* This doesn't actually save.</small>
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
export default {
  name: "ClassroomManagement",
  data() {
    return {
      dialog: false,

      valid: false,
      studentname: "",
      className: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      cards: [
        {
          id: 1,
          className: "Quarta A",
        },
      ],
    };
  },
  methods: {
    addCard() {
      this.dialog = false;

      let newCard = {
        id: Date.now(),
        className: this.className,
      };

      this.cards.push(newCard);
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
.classroom-card {
  background-color: #f3722168;
  width: 80%;
}
#list {
  width: 100%;
  background-color: #b4f32195;
}
#container-create {
  height: 100%;
  background-color: lightgoldenrodyellow;
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
