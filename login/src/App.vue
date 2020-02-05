<script>
import GabsAuth from "./features/auth/main";
export default {
  components: {
    GabsAuth
  }
};
</script>

<template>
  <gabs-auth />
</template>

<style>
body {
  margin: 0;
  color: #6a6f8c;
  background: #c8c8c8;
  font: 600 16px/18px "Open Sans", sans-serif;
}
*,
:after,
:before {
  box-sizing: border-box;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  display: block;
}
</style>