import { lightTheme } from '@cnamts/design-tokens/src/colors';

import fr from 'vuetify/src/locale/fr';

export default {
	theme: {
		themes: {
			light: {
				...lightTheme,
				primary: '#0c419a'
			}
		},
		options: {
			variations: false
		}
	},
	icons: {
		iconfont: 'mdiSvg'
	},
	lang: {
		locales: { fr },
		current: 'fr'
	}
};
