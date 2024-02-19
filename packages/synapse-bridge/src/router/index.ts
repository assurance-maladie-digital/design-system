import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/sitemap",
		name: "Sitemap",
		component: () => import("../views/Sitemap.vue"),
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
