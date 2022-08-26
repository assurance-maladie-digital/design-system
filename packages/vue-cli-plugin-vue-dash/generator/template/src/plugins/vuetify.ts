import Vue from 'vue';

// Import vuetify/lib to use vuetify-loader
import Vuetify from 'vuetify/lib';

import fr from 'vuetify/src/locale/fr';

// Import theme colors
import { colorClasses, lightTheme } from '@cnamts/design-tokens/src/colors';

Vue.use(Vuetify);

export const vuetify = new Vuetify({
	theme: {
		themes: {
			light: {
				...lightTheme,
				...colorClasses
			}
		}
	},
	icons: {
		iconfont: 'mdiSvg'
	},
	lang: {
		locales: { fr },
		current: 'fr'
	}
});
