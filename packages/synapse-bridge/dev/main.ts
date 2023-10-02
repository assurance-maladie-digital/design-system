import { createApp } from 'vue'
import Playground from './Playground.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import router from "../src/router";

// import { colorTheme } from '@cnamts/design-tokens'

const vuetify = createVuetify({
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi
		}
	},
	theme: {
		defaultTheme: 'light',
		themes: {
			light: {
				// colors: colorTheme
			}
		}
	}
})

createApp(Playground)
	.use(vuetify)
	.use(router)
	.mount('#app')