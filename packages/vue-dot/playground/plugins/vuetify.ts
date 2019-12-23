import Vue from 'vue';

// Import vuetify/lib to use vuetify-loader
import Vuetify from 'vuetify/lib';

// Import theme colors
import colors from '../theme/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			/**
			 * Enabling customProperties will also generate a css variable for each theme color,
			 * which you can then use in your components' <style> blocks.
			 * https://vuetifyjs.com/en/customization/theme#options
			 */
      customProperties: true
    },
		// Destructure colors object in theme
		themes: {
			...colors
		}
	},
	icons: {
		iconfont: 'mdiSvg'
	}
});
