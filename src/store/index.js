import Vue from "vue";
import Vuex from "vuex";
import carts from "./modules/carts";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    carts,
    users,
  },
});
