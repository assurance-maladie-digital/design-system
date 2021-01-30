import fr from 'vuetify/es5/locale/fr';

const lightTheme = {
	// Brand
	primary: '#0c419a',
	secondary: '#0c4887',
	accent: '#2576cd',
	// State
	success: '#009688',
	error: '#b00000',
	warning: '#ba8b00'
};

export default {
	theme: {
		themes: {
			light: lightTheme
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
