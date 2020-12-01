<template>
  <div class="row">
    <div class="column" id="col-sx">
      <div class="col-text">corsi</div>
    </div>
    <div class="column" id="col-dx">
      <div class="col-text">progetti</div>
    </div>

    
        <LoginCard id="log-card" />
     
  </div>
</template>

<script>
import LoginCard from "./LoginCard.vue";
export default {
  name: "LoginTeacher",
  components: {
    LoginCard,
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

  /** temporaneamente per mostrare che non è possibile accedere alle sezioni senza il login.
  Da modificare poi..   */
  cursor: not-allowed;
}

#log-card {
  position: absolute;
  z-index: 500;

  /**centering */
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  /**styling */
  background-color: rgba(244, 244, 244, 0.9);
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  /**size */
  height: 350px;
  width: 40vw;
}
</style>
