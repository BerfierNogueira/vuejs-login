import Vue from 'vue'
import App from './App.vue'
import EventBus from "./plugins/event-bus";
import vuelidate from "vuelidate";

Vue.use(EventBus);
Vue.use(vuelidate);

new Vue({
  el: '#app',
  render: h => h(App)
})
