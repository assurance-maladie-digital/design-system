import Vue from 'vue';

import Vuetify from 'vuetify/lib';

import { colorTheme } from '@cnamts/design-tokens/src/colors';

Vue.use(Vuetify);

export const vuetify = new Vuetify({
	theme: {
		themes: {
			light: colorTheme
		}
	},
	icons: {
		iconfont: 'mdiSvg'
	}
});
