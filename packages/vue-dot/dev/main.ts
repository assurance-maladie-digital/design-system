import Vue from 'vue';

Vue.config.productionTip = false;

import 'custom-event-polyfill';

import { vuetify } from './vuetify';
import './vue-dot';

import App from './App.vue';

import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { RootState } from '../src/modules';
import { notification } from '../src/modules/notification';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
	mode: 'history'
});

const store = new Vuex.Store<RootState>({
	modules: {
		notification
	}
});

new Vue({
	vuetify,
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
