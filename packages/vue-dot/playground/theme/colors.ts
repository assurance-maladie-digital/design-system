// Import Vuetify theme from Design Tokens
import { vuetifyTheme } from '../../src/tokens/vuetifyTheme';

/** Custom Vuetify color theme */
export const colors = {
	light: {
		...vuetifyTheme
	},
	dark: {
		primary: '#004c8f',
		secondary: '#2c7fd8',
		accent: '#1976dc',
		error: '#f65c51',
		info: '#0077c5',
		success: '#009688',
		warning: '#ba8b00'
	}
};
