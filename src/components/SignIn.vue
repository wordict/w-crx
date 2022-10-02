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
    <button class="signButton" id="signInButton" type="submit" @click="signIn">Sign In</button>
    <br>

    <router-link to="/signup">
      <a class="signupLink">
        Don't you have an account?
      </a>
    </router-link>
  </div>
</template>

<script>
import api from "../api/api.js"
export default {
  name: "SignIn",
  props: {

  },
  data() {
    return {
      emailInp:    "",
      passwordInp: ""
    }
  },
  methods:{
    signIn() {
      api.signIn({ "email": this.emailInp, "password": this.passwordInp })
    }
  }
}
</script>

<style>
.form {
  display: grid;
  margin: 10px;
}

.form label {
  text-align: left;
  margin-left: 10px;
  font-size: 16px;
  color: rgb(98, 89, 89);
  justify-content: flex-start;
}
.form input {
  height: 25px;
  width: 200px;
  margin: 5px;
  border: rgb(0, 0, 0);
  border-radius: 4px;
  color: black;
  box-shadow: 1px 1px 6px 1px rgba(0.15, 0.15, 0.15, 0.15);
}
.signButton {
  outline: none;
  font-size: 16px;
  color: white;
  border-color: #1d3b58;
  background: #1d3b58;
  width: 150px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.signButton:active {
  color: white;
  transform: translateY(2px);
  background-color: #1d3b58;
  box-shadow: 1px 1px 5px 1px rgb(29, 59, 88);
}
.signupLink{
  color: #2c5180;
}
</style>
