// Import polyfills for older browser support
// import '@babel/polyfill';
import Vue from 'vue';

// Register globally all examples
import './examples';

// Disable console tooltip
Vue.config.productionTip = false;

// Import plugins
import { vuetify } from './plugins/vuetify';
import './plugins/vue-dot';

// Import Playground
import Playground from './Playground.vue';

// Create Vue instance
new Vue({
	vuetify,
	render: (h) => h(Playground)
}).$mount('#app');
