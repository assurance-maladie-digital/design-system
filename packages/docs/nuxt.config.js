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
				content: 'Un Design System pour l’Assurance Maladie'
			}
		],
		link: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			},
			{
				rel: 'mask-icon',
				href: '/safari-pinned-tab.svg',
				color: '#0c419a'
			}
		]
	},
	css: [
		'@cnamts/vue-dot/dist/vue-dot.css',
		'~/assets/styles/index.scss'
	],
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/vuetify',
		'@nuxtjs/google-fonts'
	],
	plugins: [
		'~/plugins/vue-dot.ts',
		'~/plugins/form-builder.ts'
	],
	build: {
		transpile: [
			'@cnamts/vue-dot',
			'@cnamts/form-builder'
		]
	},
	modules: [
		'@nuxt/content'
	],
	components: true,
	content: {
		liveEdit: false
	},
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
	},
	router: {
		middleware: 'homeRedirect'
	}
};
