import Vue from 'vue';

// Import vuetify/lib to use vuetify-loader
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export const vuetify = new Vuetify({
	theme: {},
	icons: {
		iconfont: 'mdiSvg'
	}
});
