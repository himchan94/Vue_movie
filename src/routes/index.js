import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";

export default createRouter({
  // Hash 모드, History 모드
  // https://google.com/#/search
  history: createWebHashHistory(),
  // pages
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
