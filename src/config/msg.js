import Vue from "vue";
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  iconPack: "fontawesome",
  duration: 3000
});

Vue.toasted.register("defaultSuccess", "Success", {
  type: "success",
  icon: "check",
  position: "bottom-right"
});

Vue.toasted.register(
  "defaultError",
  payload => (!payload.msg ? "Oops... Something is Wrong..." : payload.msg),
  { type: "error", icon: "times", position: "bottom-right" }
);
