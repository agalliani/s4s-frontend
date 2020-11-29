<template>
  <v-card class="mx-auto">
    <v-col class="col-form">
      <v-card-text>
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            hint="At least 8 characters"
            required
            counter
            @click:append="show1 = !show1"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          ></v-text-field>
        </form>
      </v-card-text>
    </v-col>
    <v-row>
      <v-col class="col-form">
        <v-card-actions>
          <v-btn class="btn-log" @click="submit">
            Sign In
          </v-btn>
          <v-btn class="btn-log" @click="clear">
            clear
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
  },
  data() {
    return {
      name: "",
      email: "",

      show1: false,

      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      this.$store.dispatch("disableLogin");
      location.reload();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style>
.col-form {
  padding-right: 25px;

  /** centering */
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-log {
  margin-right: 2%;
  margin-left: 2%;
}
</style>
