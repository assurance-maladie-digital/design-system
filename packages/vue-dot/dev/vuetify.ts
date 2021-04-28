import Vue from 'vue';

// Import vuetify/lib to use vuetify-loader
import Vuetify from 'vuetify/lib';

import { lightTheme } from '@cnamts/design-tokens/src/colors';

Vue.use(Vuetify);

export const vuetify = new Vuetify({
	theme: {
		themes: {
			light: lightTheme
		}
	},
	icons: {
		iconfont: 'mdiSvg'
	}
});
