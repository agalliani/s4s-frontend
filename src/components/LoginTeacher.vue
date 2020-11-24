<template>
  <div class="row">
    <div class="column" id="col-sx">
      <div class="col-text">corsi</div>
    </div>
    <div class="column" id="col-dx">
      <div class="col-text">progetti</div>
    </div>

    <LoginBox />
  </div>
</template>

<script>
import LoginBox from "./LoginBox.vue";
export default {
  name: "LoginTeacher",
  components: {
    LoginBox,
  },
};
</script>

<style scoped>
.row:after {
  display: table;
  clear: both;
}
.column {
  float: left;
  width: 50%;
  height: 100vh;

  /** centering */
  display: flex;
  justify-content: center;
  align-items: center;

  /** temporaneamente per mostrare che non è possibile accedere alle sezioni senza il login.
  Da modificare poi..   */
  cursor: not-allowed;
}
#col-sx {
  background-color: rgb(245, 96, 96);
}

#col-dx {
  background-color: rgb(132, 172, 220);
}
.col-text {
  /**text styling */
  font-weight: bold;
  font-size: 5vw;
  font-variant: small-caps;
  letter-spacing: 2px;
  cursor: default;
}

</style>
