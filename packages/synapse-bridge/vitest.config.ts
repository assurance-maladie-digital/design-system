import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig(configEnv => mergeConfig(
	viteConfig(configEnv),
	defineConfig({
		test: {
			environment: 'jsdom',
			coverage: {
				enabled: true,
				provider: 'v8',
				reportsDirectory: './tests/unit/coverage',
			},
			deps: {
				// @see https://github.com/vuetifyjs/vuetify/issues/18396
				inline: ['vuetify'],
			},
			setupFiles: ['./tests/unit/setup.ts'],
		},
	}),
))
