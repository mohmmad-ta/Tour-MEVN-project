import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home";
import destination from "../views/Destination";
import book from "../views/BookPage.vue";
import contact from "../views/Contact";
import ShowDist from "../views/ShowDist";
import login from "../views/user/LogIn";
import signup from "../views/user/SignUp";
import profile from "../views/ProFilePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/book",
    name: "book",
    component: book,
  },
  {
    path: "/destination",
    name: "destination",
    component: destination,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/ShowDist",
    name: "ShowDist",
    component: ShowDist,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
