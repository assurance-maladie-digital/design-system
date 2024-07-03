import { defineConfig, type Plugin } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'

function generateVuetifyGlobals() {
	const components = [
		'VForm',
		'VBtn',
		'VIcon',
		'VChip',
		'VMenu',
		'VRadioGroup',
		'VRadio',
		'VTable',
		'VDataTable',
		'VBtnToggle',
		'VCheckbox',
		'VSelect',
		'VRating',
		'VRangeSlider',
		'VSnackbar',
		'VTooltip',
		'VTextField',
		'VInput',
		'VToolbar',
		'VNavigationDrawer',
		'VTabs',
		'VLayout',
		'VFooter',
		'VAlert',
		'VDivider',
		'VSheet',
		'VList',
		'VGrid',
		'VDialog',
		'VCard',
		'VSkeletonLoader',
		'VBadge',
		'VExpansionPanel',
		'VAutocomplete',
		'VSlider',
		'VTextarea',
		'transitions',
	];

	const globals = {};

	for (const component of components) {
		globals[`vuetify/lib/components/${component}/index.mjs`] = component;
	}
	globals['vuetify/components/VSkeletonLoader'] = 'VSkeletonLoader';
	globals['vuetify/lib/directives/index.mjs'] = 'vuetifyDirectives';

	return globals;
}
export default defineConfig(({ mode }) => {
	const config = {
		plugins: [
			vue({
				template: { transformAssetUrls }
			}),
			vuetify(
				{
					autoImport: true,
					styles: 'sass'
				}
			),
			dts({
				rollupTypes: true
			})
		],
		define: {
			__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
		},
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
					/vuetify/,
				],
				output: {
					globals: {
						vue: 'Vue',
						vuetify: 'Vuetify',
						'vuetify/directives': 'vuetifyDirectives',
						'vuetify/lib/directives': 'vuetifyDirectives',
						...generateVuetifyGlobals(),
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
