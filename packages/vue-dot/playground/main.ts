import '@babel/polyfill';
import Vue from 'vue';

Vue.config.productionTip = false;

import './plugins/vuetify';
import './plugins/vue-dot';

import Playground from './Playground.vue';

import DocSection from './components/DocSection.vue';
Vue.component('DocSection', DocSection);

new Vue({
	render: (h) => h(Playground)
}).$mount('#app');
