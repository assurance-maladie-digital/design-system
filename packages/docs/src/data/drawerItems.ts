import { DrawerItem } from '~/types/drawer';

import { mdiSpeedometer, mdiViewDashboard, mdiCogs, mdiTeach } from '@mdi/js';

export const drawerItems: DrawerItem[] = [
	{
		title: 'Démarrer',
		icon: mdiSpeedometer,
		items: [
			{
				title: 'Introduction',
				to: '/demarrer/introduction'
			},
			{
				title: 'Installation',
				to: '/demarrer/installation'
			},
			{
				title: 'Roadmap',
				to: '/demarrer/roadmap'
			},
			{
				title: 'Contribuer',
				to: '/demarrer/contribuer'
			},
			{
				title: 'Glossaire',
				to: '/demarrer/glossaire'
			}
		]
	},
	{
		title: 'Composants',
		icon: mdiViewDashboard,
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
				title: 'DataListGroup',
				to: '/composants/data-list-group'
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
				title: 'DownloadBtn',
				to: '/composants/download-btn'
			},
			{
				title: 'ErrorPage',
				to: '/composants/error-page'
			},
			{
				title: 'ExternalLinks',
				to: '/composants/external-links'
			},
			{
				title: 'FileUpload',
				to: '/composants/file-upload'
			},
			{
				title: 'FilterModule',
				to: '/composants/filter-module'
			},
			{
				title: 'FooterWrapper',
				to: '/composants/footer-wrapper'
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
				title: 'FranceConnectBtn',
				to: '/composants/france-connect-btn'
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
				title: 'NotificationBar',
				to: '/composants/notification-bar'
			},
			{
				title: 'PageContainer',
				to: '/composants/page-container'
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
				title: 'TableToolbar',
				to: '/composants/table-toolbar'
			},
			{
				title: 'UploadWorkflow',
				to: '/composants/upload-workflow'
			}
		]
	},
	{
		title: 'Composants techniques',
		icon: mdiCogs,
		items: [
			{
				title: 'Directives',
				items: [
					{
						title: 'Debounce',
						to: '/directives/debounce'
					}
				]
			},
			{
				title: 'Starter Kit',
				items: [
					{
						title: 'Explorer',
						to: '/starter-kit/explorer'
					}
				]
			}
		]
	},
	{
		title: 'Guides',
		icon: mdiTeach,
		items: [
			{
				title: 'Nouveau composant',
				to: '/guides/nouveau-composant'
			},
			{
				title: 'Validation d’un formulaire',
				to: '/guides/validation-formulaire'
			},
			{
				title: 'Nouvelle page',
				to: '/guides/nouvelle-page'
			}
		]
	}
];
