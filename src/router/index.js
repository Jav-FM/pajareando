import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Enciclopedia from "@/components/home/Enciclopedia";
import InfoAve from "@/components/home/InfoAve";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "enciclopedia",
        name: "Enciclopedia",
        component: Enciclopedia,
      },
      {
        path: "infoave/:especie",
        name: "InfoAve",
        component: InfoAve,
        props: true,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
