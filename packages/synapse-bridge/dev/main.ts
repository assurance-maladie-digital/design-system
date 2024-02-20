import { createApp } from 'vue'
import Playground from './Playground.vue'
import { router } from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as VSkeletonLoader from 'vuetify/labs/VSkeletonLoader';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import { colorTheme } from '@cnamts/design-tokens/src/colors'

const vuetify = createVuetify({
	components: {
		VSkeletonLoader,
	},
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
		},
	},
})

createApp(Playground)
	.use(vuetify)
	.use(router)
	.mount('#app')
