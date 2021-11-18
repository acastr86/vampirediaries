import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Index from "./pages/index.vue";
import Season from "./pages/season.vue";
import NotFound from "./pages/404.vue";


const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/season/:id",
        name: "Season",
        component: Season,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;