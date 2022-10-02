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
      <div class="form">
        <label for="password">Password</label>
        <input v-model="secondPasswordInp" id="password" type="password">
      </div>
      <button class="signButton" id="signUpBtn" @click="signUp">Sign Up</button>
      <br>
      <label id="passwordError" v-if="isNotValidSignupCredentials" style="color: red"> {{ notValidSignupCredentialsErrorMessage }}</label><br>
      <a class="signupLink" href="">Do you have an account?</a>
    </div>
  </template>

<script>
import api from "../api/api.js";

export default {
  name: "Signup",
  data() {
    return {
      emailInp:    "",
      passwordInp: "",
      secondPasswordInp: "",
      isNotValidSignupCredentials: false,
      notValidSignupCredentialsErrorMessage: "",
    }
  },
  methods:{
    signUp() {
      if (!this.validateSignupCredentials()) {
        this.isNotValidSignupCredentials = true;
        this.notValidSignupCredentialsErrorMessage = "Not valid credentials.";
        return;
      }
      api.signUp({ "email": this.emailInp, "password": this.passwordInp });
    },
    arePasswordsSame() {
      return this.passwordInp === this.secondPasswordInp
    },
    validateSignupCredentials() {
      if (!this.validatePassword() || !this.arePasswordsSame() || !this.validateEmail()) {
        return false;
      }
      return true;
    },
    validateEmail() {
      // const expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      // return expr.test(this.emailInp)
      return true;
    },
    validatePassword() {
      // const expr = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      // return expr.test(this.passwordInp);
      return true
    }
  }
}
</script>

<style scoped>

</style>