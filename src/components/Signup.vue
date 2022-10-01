<template>
  <div>
    <div class="form">
      <label for="email">Email</label>
      <input v-model="emailInp" id="email" type="email" autocomplete="off">
    </div>
    <div class="form">
      <label for="password">Password</label>
      <input v-model="passwordInp" id="password" type="password">
    </div>
    <button id="signUpBtn" type="submit" @click="signUp">Sign Up</button>
    <br>
    <a href="">Do you have an account?</a>
  </div>
</template>

<script>
import api from "../api/api.js"
export default {
  name: "Signup",
  props: {

  },
  data() {
    return {
      emailInp:    "",
      passwordInp: ""
    }
  },
  methods:{
    signUp() {
      api.signUp({ "email": this.emailInp, "password": this.passwordInp })
    }
  }
}
</script>

<style scoped>
.form {
  display: grid;
  margin: 10px;
}

label {
  text-align: left;
  margin-left: 10px;
  font-size: 16px;
  color: rgb(98, 89, 89);
  justify-content: flex-start;
}
input {
  height: 25px;
  width: 200px;
  margin: 5px;
  border: rgb(0, 0, 0);
  border-radius: 4px;
  color: black;
  box-shadow: 1px 1px 6px 1px rgba(0.15, 0.15, 0.15, 0.15);
}
#signUpBtn {
  outline: none;
  font-size: 16px;
  color: white;
  border-color: #1d3b58;
  background: #1d3b58;
  width: 150px;
  margin-top: 15px;
  margin-bottom: 10px;
}
#signUpBtn:active {
  color: white;
  transform: translateY(2px);
  background-color: #1d3b58;
  box-shadow: 1px 1px 5px 1px rgb(29, 59, 88);
}
a{
  color: #2c5180;
}
</style>
