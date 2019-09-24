import Vue from "vue";
import "font-awesome/css/font-awesome.css";

import App from "./App.vue";
import router from "./config/router";
import store from "./config/store";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
