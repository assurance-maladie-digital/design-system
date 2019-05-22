// Import polyfills for older browser support
// import '@babel/polyfill';
import Vue from 'vue';

// Disable console tooltip
Vue.config.productionTip = false;

// Import plugins
import './plugins/vuetify';
import './plugins/vue-dot';

// Globally register DocSection component
import DocSection from './components/DocSection.vue';
Vue.component('DocSection', DocSection);

// Import Playground
import Playground from './Playground.vue';

// Create Vue instance
new Vue({
	render: (h) => h(Playground)
}).$mount('#app');
