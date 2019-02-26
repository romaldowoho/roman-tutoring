import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  linkActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue")
    }
  ]
});

export default router;
