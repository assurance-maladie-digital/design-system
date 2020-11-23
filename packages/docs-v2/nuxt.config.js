import { parseMarkdownDescription } from './src/hooks/parseMarkdownDescription';

export default {
	target: 'static',
	srcDir: './src/',
	head: {
		htmlAttrs: {
			lang: 'fr-FR',
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
		'~/assets/styles/index.scss',
		'@cnamts/vue-dot/dist/vue-dot.css'
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
		'@nuxt/content',
		'@nuxtjs/axios'
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
	content: {
		markdown: {
			prism: {
				theme: 'prismjs/themes/prism-tomorrow.css'
			}
		}
	},
	hooks: {
		'content:file:beforeInsert': parseMarkdownDescription
	}
};
