const remark = require('remark');
const html = require('remark-html');

function markdownToHtml(content) {
	remark()
		.use(html)
		.process(content, (error, file)  =>{
			if (error) {
				throw new Error(error);
			}

			return String(file);
		});
}

export default {
	target: 'static',
	srcDir: 'src/',
	head: {
		title: 'Design System Digital',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		]
	},
	css: [
		'@/assets/css/base.scss',
		'@/assets/css/vuetify.scss'
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
		'content:file:beforeInsert': async (document) => {
			if (document.extension !== '.md' || !document.description) {
				return;
			}

			document.description = markdownToHtml(document.description);
		}
	}
};
