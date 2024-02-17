import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealDetails from "../views/MealDetails.vue";
//create routes
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        component: Home,
        name: "home",
      },
      {
        path: "by-name/:name?",
        component: MealsByName,
        name: "byName",
        props: true,
      },
      {
        path: "by-letter/:letter?",
        component: MealsByLetter,
        name: "byLetter",
        props: true,
      },
      {
        path: "by-ingredient",
        component: MealsByIngredient,
        name: "byIngredient",
        props: true,
      },
      {
        path: "meal-details/:id",
        component: MealDetails,
        name: "mealDetails",
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
