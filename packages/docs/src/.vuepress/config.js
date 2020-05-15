module.exports = {
	plugins: [
		[
			'vuepress-plugin-typescript'
		]
	],
	themeConfig: {
		sidebar: [
			{
				title: 'Directives',
				group: 'directives',
				items: [
					{
						title: 'Debounce',
						to: '/directives/debounce/'
					}
				]
			},
			{
				title: 'Éléments',
				group: 'elements',
				items: [
					{
						title: 'CopyBtn',
						to: '/elements/copy-btn'
					},
					{
						title: 'DataList',
						to: '/elements/data-list'
					},
					{
						title: 'HeaderLoading',
						to: '/elements/header-loading'
					}
				]
			},
			{
				title: 'Patterns',
				group: 'patterns',
				items: [
					{
						title: 'DatePicker',
						to: '/patterns/date-picker'
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
