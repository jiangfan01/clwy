import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FooterComponents from "./components/FooterComponents";
import { dateFormat, thousandFormat } from "./filters";
Vue.filter("dateFormat", dateFormat);
Vue.filter("thousandFormat", thousandFormat);
Vue.config.productionTip = false;
Vue.component("FooterComponents", FooterComponents);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
