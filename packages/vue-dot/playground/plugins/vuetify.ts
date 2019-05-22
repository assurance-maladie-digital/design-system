import Vue from 'vue';

// Import theme colors
import colors from '../theme/colors';

// Import vuetify/lib to use vuetify-loader
import Vuetify from 'vuetify/lib';

// Import Vuetify's CSS
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
	theme: {
		// Destructure colors object in theme
		...colors
	}
});
