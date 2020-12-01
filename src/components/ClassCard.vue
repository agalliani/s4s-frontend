<template>
  <v-card class="classroom-card">
    <v-row>
      <v-col class="center">
        {{ title }}
      </v-col>
      <v-col md="2">
        <v-btn icon @click="show = !show">
          <v-icon color="black">mdi-information-outline</v-icon>
        </v-btn>

        <v-btn icon @click.stop="deleteCard(id)">
          <v-icon color="black" @click.stop="deleteCard(id)">mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-row id="custom-table-row" class="center">
          <v-col>
            <v-text-field
              outlined
              class="txt-field"
              label="Student's Name"
              v-model="studentName"
              :rules="nameRules"
              :counter="10"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              outlined
              class="txt-field"
              label="E-Mail"
              v-model="email"
              :rules="emailRules"
              :counter="100"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn outlined @click="addItem(id, studentName, email)">
              <v-icon>
                mdi-account-plus
              </v-icon>
            </v-btn>
            <v-row id="btn-label" class="center">
              ADD STUDENT
            </v-row>
          </v-col>
        </v-row>
        <v-data-table :headers="headers" :items="students">
          <template v-slot:item.actions="{ item }">
            <v-icon class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "ClassCard",
  props: {
    title: {
      type: String,
      default: "This is a title",
    },
    id: Number,
    students: Array,
  },
  data() {
    return {
      show: false,

      studentName: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],

      headers: [
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "studentName",
        },
        { text: "Email", value: "email" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    editItem() {
      console.log("Pressed EDIT button");
    },

    deleteItem() {
      console.log("Pressed DELETE button");
    },
    addItem(id) {
    //console.log("Pressed ADD button"+ " " + id);
    //   let details = {
    //       studentName: name,
    //       email: mail
    //   }

      this.$store.dispatch("addStudent", id);
    },
    deleteCard(id) {

      this.$store.dispatch("deleteClassroom", id);

      location.reload();
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

.txt-field {
  min-width: 200px;
  padding: 12px;
}

#custom-table-row {
  /* background-color: lightblue; */
}
#btn-label{
    padding-top: 9px;
}
.classroom-card {
  background-color: #f3722168;
  width: 80%;
}
</style>
