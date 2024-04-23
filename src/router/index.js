// import { createRouter, createWebHistory } from "vue-router/auto";
// import { setupLayouts } from "virtual:generated-layouts";
// // import generatedRoutes from "~pages";
// // const routes = setupLayouts(generatedRoutes);

// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     // routes,
//     extendRoutes: (routes) => setupLayouts(routes),
// });

// export default router;
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    extendRoutes: setupLayouts,
    routes: [
        {
            path: "/",
            component: () => import("@/pages/index"),
            meta: {
                layout: "",
            },
        },
        {
            path: "/about",
            component: () => import("@/pages/about"),
            meta: {
                layout: "authLayout",
            },
        },
        {
            path: "/more",
            component: () => import("@/pages/more"),
            meta: {
                layout: "",
            },
        },
    ],
});

export default router;
