<template>
  <div class="sign-up-htm">
    <div class="group">
      <label for="sign-up-user" class="label">Username</label>
      <input id="sign-up-user" type="text" class="input" />
    </div>
    <div class="group">
      <label for="sign-up-password" class="label">Password</label>
      <input id="sign-up-password" type="password" class="input" data-type="password" />
    </div>
    <div class="group">
      <label for="sign-up-password-repeat" class="label">Repeat Password</label>
      <input id="sign-up-password-repeat" type="password" class="input" data-type="password" />
    </div>
    <div class="group">
      <label for="email-address" class="label">Email Address</label>
      <input id="email-address" type="text" class="input" />
    </div>
    <div class="group">
      <input type="submit" class="button" value="Sign Up" />
    </div>
    <div class="hr"></div>
    <div class="foot-lnk">
      <a for="tab-1">Already Member?</a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$bus.$on("navigate", obj => {
      console.log({
        where: "sign-up",
        obj: obj
      });
    });
  }
};
</script>