module.exports = {
	plugins: [
		[
			'vuepress-plugin-typescript'
		]
	],
	dest: 'dist',
	locales: {
		'/': {
			lang: 'fr-FR',
			title: 'Design System Digital',
			description: 'Un Design System pour l\'Assurance Maladie.'
		}
	},
	themeConfig: {
		sidebar: [
			{
				title: 'Composants',
				group: 'composants',
				items: [
					{
						title: 'CopyBtn',
						to: '/composants/copy-btn'
					},
					{
						title: 'CustomIcon',
						to: '/composants/custom-icon'
					},
					{
						title: 'DataList',
						to: '/composants/data-list'
					},
					{
						title: 'DatePicker',
						to: '/composants/date-picker'
					},
					{
						title: 'DialogBox',
						to: '/composants/dialog-box'
					},
					{
						title: 'ErrorPage',
						to: '/composants/error-page'
					},
					{
						title: 'FileUpload',
						to: '/composants/file-upload'
					},
					{
						title: 'FormBuilder',
						to: '/composants/form-builder'
					},
					{
						title: 'FormField',
						to: '/composants/form-field'
					},
					{
						title: 'FormFieldList',
						to: '/composants/form-field-list'
					},
					{
						title: 'FooterWrapper',
						to: '/composants/footer-wrapper'
					},
					{
						title: 'HeaderLoading',
						to: '/composants/header-loading'
					},
					{
						title: 'LangBtn',
						to: '/composants/lang-btn'
					},
					{
						title: 'PageCard',
						to: '/composants/page-card'
					},
					{
						title: 'PaginatedTable',
						to: '/composants/paginated-table'
					},
					{
						title: 'SubHeader',
						to: '/composants/sub-header'
					},
					{
						title: 'UploadWorkflow',
						to: '/composants/upload-workflow'
					}
				]
			},
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
				title: 'Contribution',
				group: 'contributions',
				items: [
					{
						title: 'Correction de bug',
						to: '/contributions/bug-report/'
					},
					{
						title: 'Demande évolution',
						to: '/contributions/feature-request/'
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
