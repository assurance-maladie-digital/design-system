import fr from 'vuetify/es5/locale/fr';

import { colorTheme } from '@cnamts/design-tokens/dist/colors';

export default {
	theme: {
		themes: {
			light: colorTheme
		},
		options: {
			variations: false
		}
	},
	icons: {
		iconfont: 'mdiSvg'
	},
	lang: {
		locales: {
			fr
		},
		current: 'fr'
	}
};
