import { DrawerItem } from '~/types/drawer';

import { mdiSpeedometer, mdiViewDashboard } from '@mdi/js';

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
				title: 'Contribuer',
				to: '/demarrer/contribuer'
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
				title: 'TableToolbar',
				to: '/composants/table-toolbar'
			},
			{
				title: 'UploadWorkflow',
				to: '/composants/upload-workflow'
			}
		]
	}
];
