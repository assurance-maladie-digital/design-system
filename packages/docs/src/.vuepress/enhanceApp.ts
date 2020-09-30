import { EnhanceApp } from 'vuepress-types';

import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import { vuetify } from './vuetify';

import VueDot from '@cnamts/vue-dot';

import FormBuilder from '@cnamts/form-builder';

import '@cnamts/vue-dot/src/styles/global.scss';

import { icons } from './icons';

import InputFacade from 'vue-input-facade';

import './theme/styles/index.scss';

const enhanceApp: EnhanceApp = ({ Vue, options }) => {
	// Register plugins
	Vue.use(Vuetify);
	options.vuetify = vuetify;

	Vue.use(VueDot, {
		theme: {
			icons
		}
	});

	Vue.use(InputFacade);

	Vue.use(FormBuilder);
};

export default enhanceApp;
