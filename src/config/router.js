import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/home/Home";
import WineById from "../components/wine/WineById";
import WineRegister from "../components/wine/WineRegister";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "wineRegister",
    path: "/newwine",
    component: WineRegister
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
