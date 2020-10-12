import Vue from 'vue';

// Polyfill for vue-input-facade on IE
// (not included in core-js)
import 'custom-event-polyfill';

// Register class components hooks
import Component from 'vue-class-component';

Component.registerHooks([
	'beforeRouteEnter',
	'beforeRouteLeave',
	'beforeRouteUpdate'
]);

// Import plugins
import { vuetify } from './plugins/vuetify';
import './plugins/vue-dot';
import './plugins/webfontloader';

// Import application parts
import App from './App.vue';
import { router } from './router';
import { store } from './store';<% if (i18n) { %>
import { i18n } from './i18n';<% } %>

// Remove "tip" from browser console
Vue.config.productionTip = false;

// Create main Vue instance
new Vue({
	router,
	store,<% if (i18n) { %>
	i18n,<% } %>
	vuetify,
	render: (h) => h(App)
}).$mount('#app'); // Mount it on #app (in public/index.html)
