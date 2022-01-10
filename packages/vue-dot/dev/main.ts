import Vue from 'vue';

Vue.config.productionTip = false;

import 'custom-event-polyfill';

import { vuetify } from './vuetify';
import './vue-dot';

import App from './App.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history'
});

new Vue({
	vuetify,
	router,
	render: (h) => h(App)
}).$mount('#app');
