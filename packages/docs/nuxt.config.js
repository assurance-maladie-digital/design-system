import { applyTypographicRules } from './src/hooks/applyTypographicRules';
import { parseMarkdownDescription } from './src/hooks/parseMarkdownDescription';
import { transformCodeBlocks } from './src/hooks/transformCodeBlocks';

import { tokens } from '@cnamts/design-tokens';

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
				content: 'Un Design System pour l’Assurance Maladie.'
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
				color: tokens.colors.primary
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
		'@nuxtjs/google-fonts',
		[
			'@nuxtjs/dotenv',
			{
				path: './'
			}
		]
	],
	plugins: [
		'~/plugins/vue-dot.ts',
		'~/plugins/form-builder.ts'
	],
	build: {
		transpile: [
			'@cnamts/vue-dot',
			'@cnamts/form-builder',
			'@docsearch/css'
		]
	},
	modules: [
		'@nuxt/content'
	],
	components: [
		{
			path: '~/components/global',
			global: true,
			isAsync: false
		}
	],
	content: {
		liveEdit: false
	},
	vuetify: {
		optionsPath: '~/vuetify.options.ts',
		defaultAssets: false,
		treeShake: {
			directives: ['Scroll']
		},
		customVariables: ['~/assets/styles/variables.scss']
	},
	googleFonts: {
		families: {
			'Source+Sans+Pro': [300, 400, 500, 600, 700],
			'Open+Sans': [300, 400, 500, 600, 700]
		},
		download: false
	},
	hooks: {
		'content:file:beforeParse': (document) => {
			transformCodeBlocks(document);
			applyTypographicRules(document);
		},
		'content:file:beforeInsert': parseMarkdownDescription
	},
	router: {
		middleware: 'homeRedirect'
	},
	generate: {
		routes: [
			// Generate introduction page
			// (required since we don't have a home page)
			'/demarrer/introduction'
		]
	},
	env: {
		API_URL: (process.env.DEPLOY_PRIME_URL || 'https://digital-design-system.netlify.app') + '/.netlify/functions',
		SEARCH_API_KEY: process.env.SEARCH_API_KEY || '',
		SEARCH_APP_ID: process.env.SEARCH_APP_ID || '',
		SEARCH_INDEX_NAME: process.env.SEARCH_INDEX_NAME || ''
	}
};
