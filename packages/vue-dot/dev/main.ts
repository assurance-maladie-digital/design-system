import Vue from 'vue';

Vue.config.productionTip = false;

import 'custom-event-polyfill';

import { vuetify } from './vuetify';
import './vue-dot';

import App from './App.vue';

new Vue({
	vuetify,
	render: (h) => h(App)
}).$mount('#app');
