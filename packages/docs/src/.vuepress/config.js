module.exports = {
	plugins: [
		[
			'vuepress-plugin-typescript'
		]
	],
	themeConfig: {
		sidebar: [
			// {
			// 	title: 'Commencer',
			// 	icon: 'forward-arrow',
			// 	to: '/fr/guide/'
			// },
			// {
			// 	title: 'Thèmes personnalisés',
			// 	icon: 'painter-palette',
			// 	to: '/fr/guide/themes/'
			// },
			// {
			// 	title: 'Contribuer',
			// 	icon: 'heart',
			// 	to: '/fr/contribuer/'
			// },
			// {
			// 	title: 'Feuille de route',
			// 	icon: 'clock',
			// 	to: '/fr/feuille-de-route/'
			// },
			// {
			// 	title: 'Composants IU',
			// 	icon: 'dashboard',
			// 	group: 'composants',
			// 	items: [
			// 		{
			// 			title: 'SvgIcon',
			// 			to: '/fr/composants/svg-icon/'
			// 		},
			// 		{
			// 			title: 'LangBtn',
			// 			to: '/fr/composants/lang-btn/'
			// 		},
			// 		{
			// 			title: 'DatePicker',
			// 			to: '/fr/composants/date-picker/'
			// 		},
			// 		{
			// 			title: 'DataList',
			// 			to: '/fr/composants/data-list/'
			// 		}
			// 	]
			// },
			{
				title: 'Directives',
				group: 'directives',
				items: [
					{
						title: 'Debounce',
						to: '/directives/debounce/'
					}
				]
			// },
			// {
			// 	title: 'Vuetify',
			// 	icon: 'vuetify',
			// 	href: 'https://vuetifyjs.com/en/components/api-explorer'
			},
			{
				title: 'Éléments',
				group: 'elements',
				items: [
					{
						title: 'CopyBtn',
						to: '/elements/copy-btn'
					}
				]
			}
		]
	},
	chainWebpack(config) {
		// Fix sass incompatibility,
		// see https://github.com/vuejs/vuepress/issues/2148
		for (const lang of ['sass', 'scss']) {
			for (const name of ['modules', 'normal']) {
				const rule = config.module.rule(lang).oneOf(name);
				rule.uses.delete('sass-loader');

				rule
					.use('sass-loader')
					.loader('sass-loader')
					.options({
						implementation: require('sass'),
						sassOptions: {
							indentedSyntax: lang === 'sass'
						}
					});
			}
		}
	}
};
