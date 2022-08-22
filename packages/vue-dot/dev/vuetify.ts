import Vue from 'vue';

// Import vuetify/lib to use vuetify-loader
import Vuetify from 'vuetify/lib';

// Import theme colors
import { colorsClasses } from '@cnamts/design-tokens/src/colors';

Vue.use(Vuetify);

export const vuetify = new Vuetify({
	theme: {
		themes: {
			light: colorsClasses
		}
	},
	icons: {
		iconfont: 'mdiSvg'
	}
});
