import { parseMarkdownDescription } from './src/hooks/parseMarkdownDescription';
import { transformCodeBlocks } from './src/hooks/transformCodeBlocks';

export default {
	target: 'static',
	srcDir: './src/',
	head: {
		htmlAttrs: {
			lang: 'fr-FR'
		},
		title: 'Design System Digital',
		meta: [
			{
				charset: 'UTF-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: `Un Design System pour l'Assurance Maladie`
			}
		]
	},
	css: [
		'@cnamts/vue-dot/dist/vue-dot.css',
		'~/assets/styles/index.scss'
	],
	buildModules: [
		['@nuxt/typescript-build', {
			typeCheck: {
				// Fix https://github.com/nuxt/typescript/issues/145
				typescript: require.resolve('typescript')
			}
		}],
		'@nuxtjs/vuetify',
		'@nuxtjs/google-fonts'
	],
	plugins: [
		'~/plugins/vue-dot.ts'
	],
	build: {
		transpile: [
			'@cnamts/vue-dot'
		]
	},
	modules: [
		'@nuxt/content'
	],
	components: true,
	vuetify: {
		optionsPath: '~/vuetify.options.ts',
		defaultAssets: false
	},
	googleFonts: {
		families: {
			'Open+Sans': [300, 400, 600, 700]
		},
		display: 'swap'
	},
	hooks: {
		'content:file:beforeParse': transformCodeBlocks,
		'content:file:beforeInsert': parseMarkdownDescription
	}
};
