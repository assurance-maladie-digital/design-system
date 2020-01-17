import Vue from 'vue';

// Import vuetify/lib to use vuetify-loader
import Vuetify from 'vuetify/lib';

// Import theme colors
import colors from '../theme/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		// Destructure colors object in theme
		themes: {
			...colors
		}
	},
	icons: {
		iconfont: 'mdiSvg'
	}
});
