<template>
  <div id="login-box">
    <div id="title">
      compila la tua richiesta di accesso al portale:
    </div>

    <form action="">
      <div id="form-children">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Inserisci il tuo nome.."
        /><br /><br />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Inserisci il tuo indirizzo mail.."
        /><br /><br />
        <input id="submit" type="submit" value="Registrati" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginBox"
};
</script>

<style scoped>
#login-box {
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
  height: 20vw;
  width: 40vw;
}

#title {
  margin-top: 3%;
  font-variant: small-caps;
  font-weight: bold;
  font-size: 1.5vw;
}

form {
  /* background-color: lightsteelblue; */
  float: left;
  width: 100%;
  height: 100%;
}

#form-children {
  height: 100%;
}

#name {
  margin-top: 5%;
}

#submit {
  margin-top: 4%;
}
input[type="text"],
select {
  width: 60%;
  padding: 20px 10px;
  display: inline-block;
  border: 1px solid;
  border-radius: 4px;
  border-color: #f37021;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 30%;
  background-color: #f37021;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1vw;
}

input[type="submit"]:hover {
  background-color: #fb9758;
}
</style>
