import { EnhanceApp } from 'vuepress-types';

import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import { vuetify } from './vuetify';

import VueDot from '@cnamts/vue-dot';

import { icons } from './icons';

import VueTheMask from 'vue-the-mask';

import './theme/styles/index.scss';

const enhanceApp: EnhanceApp = ({ Vue, options }) => {
	// Register plugins
	Vue.use(Vuetify);
	options.vuetify = vuetify;

	Vue.use(VueDot, {
		theme: {
			icons
		},
	});
	Vue.use(VueTheMask);
};

export default enhanceApp;
