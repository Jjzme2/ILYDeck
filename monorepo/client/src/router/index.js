import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home Page
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // Game Page
    {
      path: "/games",
      name: "games",
      component: GameView,
    },
  ],
});

export default router;
