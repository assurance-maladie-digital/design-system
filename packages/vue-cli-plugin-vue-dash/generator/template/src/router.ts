import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
<% if (i18n) { %>
import i18n, { loadLanguageAsync } from '@/i18n';<% } %>
import store from '@/store';

// Directly import Home view for faster rendering of first page
import Home from '@/views/Home.vue';

Vue.use(VueRouter);
Vue.use(VueMeta, {
	refreshOnceOnNavigation: true
});

// Env var
declare const MAINTENANCE: string;

/** See https://router.vuejs.org/fr/essentials/navigation.html for help */
const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/a-propos',
		name: 'about',
		// Route level code-splitting
		// This generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited
		component: () => import(
			/* webpackChunkName: "about" */
			'./views/About.vue'
		)
	},
	{
		path: '/maintenance',
		name: 'maintenance',
		component: () => import(
			/* webpackChunkName: "maintenance" */
			'./views/Maintenance.vue'
		)
	},
	{
		path: '*', // Everything that doesn't match a route
		name: 'notFound',
		component: () => import(
			/* webpackChunkName: "not-found" */
			'./views/NotFound.vue'
		)
	}
];

const router = new VueRouter({
	mode: 'history', // Use the History API, and remove the hash from the URL
	routes,
	// Native-like scroll behavior
	scrollBehavior(to, from, savedPosition) {
		// If there is an hash, this is an anchor, so scroll to it
		if (to.hash) {
			return {
				selector: to.hash
			};
		} else {
			// Else simulate browser behavior by returning to the previous position, or fallback to top
			if (savedPosition) {
				return savedPosition;
			} else {
				return { x: 0, y: 0 };
			}
		}
	}
});

router.beforeEach((to, from, next) => {
	// Remove notification
	store.dispatch('notification/rmNotif');

	<% if (i18n) { %>// Resolve translations before each navigation
	const lang = i18n.locale;
	loadLanguageAsync(lang).then(() => {
		if (MAINTENANCE === 'true') {
			// Avoid infinite loop
			if ('maintenance' !== to.name) {
				// Redirect to maintenance page
				next({ name: 'maintenance' });
			} else {
				// Else, resolve route
				next();
			}
		} else if ('maintenance' === to.name) {
			// Else, if we're trying to access the maintenance page
			// when not in maintenance mode, redirect to home
			next({ name: 'home' });
		} else {
			next();
		}
	});<% } else { %>if (MAINTENANCE === 'true') {
		// Avoid infinite loop
		if ('maintenance' !== to.name) {
			// Redirect to maintenance page
			next({ name: 'maintenance' });
		} else {
			// Else, resolve route
			next();
		}
	} else if ('maintenance' === to.name) {
		// Else, if we're trying to access the maintenance page
		// when not in maintenance mode, redirect to home
		next({ name: 'home' });
	} else {
		next();
	}<% } %>
});

export default router;
