import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { facts } from "@/assets/Facts";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/facts",
    name: "FactList",
    component: () => import("../views/FactsListView.vue"),
  },
  {
    path: "/fact/:id",
    name: "Fact",
    component: () => import("../views/Fact.vue"),
    // from which page you are coming to which page you want to enter. (to, from,next)

    beforeEnter: (to,_,next) => {
      alert("Route Nav gaurd intercepted  four rouct fact with id");
      //Check your authentication
      const { id } = to.params;
      //is a valid index or not
      const index = parseInt(id.toString());
      if (index < 0 || index >= facts.length) {
        next({ path: "/error" });
        return;
      }
      next(); //will route you to factCard
    },   
  },

  // catch should always be the end.
  {
    path: "/:CatchAll(.*)",
    name: "PageNotFound",
    component: () => import("../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
