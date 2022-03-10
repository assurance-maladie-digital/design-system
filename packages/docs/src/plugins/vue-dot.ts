import Vue from 'vue';

import 'dayjs/locale/fr';

import '@cnamts/vue-dot/dist/vue-dot.css';

import VueDot from '@cnamts/vue-dot/src/index';

import { icons } from '~/assets/icons';

import InputFacade from 'vue-input-facade';
Vue.use(InputFacade);

Vue.use(VueDot, {
	theme: {
		icons
	}
});
