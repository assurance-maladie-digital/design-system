import { createApp } from 'vue'
import Playground from './Playground.vue'
import { router } from './router'
import { createStore } from "vuex";


import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import { colorTheme } from "@cnamts/design-tokens/src/colors";

import { notification } from "@/modules/notification";

const vuetify = createVuetify({
	icons: {
		defaultSet: "mdi",
		aliases,
		sets: {
			mdi,
		},
	},
	theme: {
		defaultTheme: "light",
		themes: {
			light: {
				colors: colorTheme,
			},
		},
	},
})

const store = createStore({
	modules: {
		notification,
	},
});

createApp(Playground)
	.use(store)
	.use(vuetify)
	.use(router)
	.mount('#app')

