import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/home/Home";
import WineById from "../components/wine/WineById";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "wine",
    path: "/wine/:id",
    component: WineById,
    props: true
  }
];

export default new VueRouter({
  mode: "history",
  routes
});
