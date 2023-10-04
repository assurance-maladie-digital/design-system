/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineConfig({
	plugins: [
		vue({
			template: {
				transformAssetUrls
			}
		}),
		vuetify({
			autoImport: true
		})
	],
	test: {
		environment: 'jsdom',
		coverage: {
			enabled: true,
			provider: 'v8',
			reportsDirectory: './tests/unit/coverage'
		},
		deps: {
			// @see https://github.com/vuetifyjs/vuetify/issues/18396
			inline: ['vuetify']
		},
		setupFiles: ['./tests/unit/setup.ts']
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'dev/main.ts'),
			name: 'SynapseBridge',
			fileName: 'synapse-bridge'
		},
		rollupOptions: {
			external: [
				'vue',
				'vuetify'
			],
			output: {
				globals: {
					vue: 'Vue',
					vuetify: 'Vuetify'
				}
			}
		}
	}
})
