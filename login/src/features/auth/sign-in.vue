<template>
  <form action="#" @submit.prevent="submit" class="sign-in-htm">
    <div class="group">
      <label for="sign-in-user" class="label">Username</label>
      <input id="sign-in-user" type="text" class="input" v-model="username" />
    </div>
    <div class="group">
      <label for="sign-in-password" class="label">Password</label>
      <input
        id="sign-in-password"
        type="password"
        class="input"
        data-type="password"
        v-model="password"
      />
    </div>
    <div class="group">
      <input id="check" type="checkbox" class="check" v-model="keepSignedIn" />
      <label for="check">
        <span class="icon"></span> Keep me Signed in
      </label>
    </div>
    <div class="group">
      <input type="submit" class="button" value="Sign In" />
    </div>
    <div class="hr"></div>
    <div class="foot-lnk">
      <a href="#forgot">Forgot Password?</a>
    </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  mounted() {
    this.$bus.$on("navigate", obj => this.selected);
  },
  data: function() {
    return {
      username: "",
      password: "",
      keepSignedIn: true
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    submit() {
      this.$emit("do-sign-in", { ...this.$data });
    },
    selected() {
      if (obj === "signUp") {
        this.username = "";
        this.password = "";
        this.keepSignedIn = true;
      }
    }
  },
  computed: {
    isValid() {
      return !(this.$v.username.$invalid || this.$v.password.$invalid);
    }
  }
};
</script>