import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/home/Home";
import WineById from "../components/wine/WineById";
import WineRegister from "../components/wine/WineRegister";
import { userKey } from "../config/global";

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
    component: WineRegister,
    meta: { requiresAdmin: true }
  },
  {
    name: "wine",
    path: "/wine/:id",
    component: WineById,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const json = localStorage.getItem(userKey);

  if (to.matched.some(record => record.meta.requiresAdmin)) {
    const user = JSON.parse(json);
    user && user.admin ? next() : next({ path: "/" });
  } else {
    next();
  }
});

export default router;
