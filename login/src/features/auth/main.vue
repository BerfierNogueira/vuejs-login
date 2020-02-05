<template>
  <div class="login-wrap">
    <div class="login-html">
      <input
        id="tab-1"
        type="radio"
        v-model="navigation"
        @change="onNavigate"
        name="tab"
        value="signIn"
        class="sign-in"
        checked
      />
      <label for="tab-1" class="tab">Sign In</label>
      <input
        id="tab-2"
        type="radio"
        v-model="navigation"
        @change="onNavigate"
        name="tab"
        value="signUp"
        class="sign-up"
      />
      <label for="tab-2" class="tab">Sign Up</label>
      <div class="login-form">
        <sign-in @do-sign-in="doSignIn" />
        <sign-up />
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from "./sign-in";
import SignUp from "./sign-up";
export default {
  name: "main-auth",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      navigation: "signIn"
    };
  },
  components: {
    SignIn,
    SignUp
  },
  methods: {
    doSignIn(obj) {
      console.log(obj);
    },
    onNavigate() {
      this.$bus.$emit("navigate", this.navigation);
    }
  }
};
</script>

<style src="./auth-style.css">
</style>
