import Vue from "vue";
import "font-awesome/css/font-awesome.css";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
