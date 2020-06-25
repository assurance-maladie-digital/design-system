module.exports = {
	plugins: [
		[
			'vuepress-plugin-typescript'
		]
	],
	dest: 'dist',
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
						title: 'CustomIcon',
						to: '/elements/custom-icon'
					},
					{
						title: 'DataList',
						to: '/elements/data-list'
					},
					{
						title: 'DialogBox',
						to: '/elements/dialog-box'
					},
					{
						title: 'HeaderLoading',
						to: '/elements/header-loading'
					},
					{
						title: 'PageCard',
						to: '/elements/page-card'
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
					},
					{
						title: 'FileUpload',
						to: '/patterns/file-upload'
					},
					{
						title: 'FooterWrapper',
						to: '/patterns/footer-wrapper'
					},
					{
						title: 'PaginatedTable',
						to: '/patterns/paginated-table'
					},
					{
						title: 'SubHeader',
						to: '/patterns/sub-header'
					},
					{
						title: 'UploadWorkflow',
						to: '/patterns/upload-workflow'
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
