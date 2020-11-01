import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "Dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
      },
      {
        path: "fundGroupList",
        name: "fundGroupList",
        component: () => import("../views/FundGroupList.vue"),
      },
      {
        path: "FundStatisticsList",
        name: "FundStatisticsList",
        component: () => import("../views/FundStatisticsList.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
