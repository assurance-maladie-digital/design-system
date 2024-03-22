import { createApp } from 'vue';
import { createStore } from 'vuex';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

import { colorTheme } from '@cnamts/design-tokens/src/colors';
import { router } from './router';
import Playground from './Playground.vue';

import { notification } from '@/modules/notification';

const vuetify = createVuetify({
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		},
	},
	theme: {
		defaultTheme: 'light',
		themes: {
			light: {
				colors: colorTheme,
			},
			dark: {
				colors: colorTheme,
			},
		},
	},
});

const store = createStore({
	modules: {
		notification,
	},
});

createApp(Playground)
	.use(store as any)
	.use(vuetify)
	.use(router)
	.mount('#app');
