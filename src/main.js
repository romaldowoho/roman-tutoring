import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import iView from "iview";
import VueScrollTo from "vue-scrollto";
import "iview/dist/styles/iview.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(iView);
Vue.use(VueScrollTo);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
}).$mount("#app");
