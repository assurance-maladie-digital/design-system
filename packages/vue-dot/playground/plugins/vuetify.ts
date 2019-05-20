import Vue from 'vue';

import colors from '../theme/colors';

import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
	theme: {
		...colors
	}
});
