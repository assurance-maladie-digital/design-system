import { defineConfig, type Plugin } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite' // This imports the plugin

export default defineConfig(({ mode }) => {
	const config = {
		plugins: [
			vue(),
			dts({
				rollupTypes: true
			}),
			Components ({dirs: ["src/elements","src/patterns", "src/templates"] }),
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
				'@tests': fileURLToPath(new URL('./tests', import.meta.url))
			}
		},
		build: {
			lib: {
				entry: resolve(__dirname, 'src/main.ts'),
				name: 'SynapseBridge',
				fileName: 'synapse-bridge'
			},
			rollupOptions: {
				external: [
					'vue',
					/vuetify/
				],
				output: {
					globals: {
						vue: 'Vue',
						vuetify: 'Vuetify'
					}
				}
			}
		}
	}

	if (mode === 'development') {
		config.plugins.push(vuetify({
			styles: {
				configFile: 'src/styles/settings.scss'
			}
		}) as unknown as Plugin)
	}

	if (mode === 'analyze') {
		config.plugins.push(visualizer({
			filename: 'dist/stats.html'
		}))
	}

	return config
})
