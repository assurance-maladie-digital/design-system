const remark = require('remark');
const html = require('remark-html');

const remarkProcessor = remark().use(html);

async function markdownToHtml(content) {
	return await remarkProcessor
		.process(content)
		.then(
			(file) => String(file),
			(err) => String(err)
		);
}

export default {
	target: 'static',
	srcDir: 'src/',
	head: {
		title: 'Design System Digital',
		meta: [
			{ charset: 'UTF-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		]
	},
	css: [
		'@/assets/css/base.scss',
		'@/assets/css/utilities.scss',
		'@/assets/css/vuetify.scss',
		'@cnamts/vue-dot/dist/vue-dot.css'
	],
	buildModules: [
		['@nuxt/typescript-build', {
			typeCheck: {
				// Fix https://github.com/nuxt/typescript/issues/145
				typescript: require.resolve('typescript')
			}
		}],
		['@nuxtjs/vuetify', {
			icons: false
		}],
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
	googleFonts: {
		families: {
			'Open+Sans': [300, 400, 600, 700]
		},
		display: 'swap'
	},
	hooks: {
		'content:file:beforeInsert': async(document) => {
			if (document.extension !== '.md' || !document.description) {
				return;
			}

			const description = await markdownToHtml(document.description);
			document.description = description;
		}
	}
};
