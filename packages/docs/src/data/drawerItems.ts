import { DrawerItem } from '~/types/drawer';

import {
	mdiSpeedometer,
	mdiViewDashboard,
	mdiCogs,
	mdiHumanMaleBoard,
	mdiSecurity
} from '@mdi/js';

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
				title: 'Principes de design',
				to: '/demarrer/principes-design'
			},
			{
				title: 'Accessibilité',
				to: '/demarrer/accessibilite'
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
				title: 'FooterBar',
				to: '/composants/footer-bar'
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
				title: 'HeaderBar',
				to: '/composants/header-bar'
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
				title: 'Logo',
				to: '/composants/logo'
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
			},
			{
				title: 'UserMenuBtn',
				to: '/composants/user-menu-btn'
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
			},
			{
				title: 'Règles de validation',
				items: [
					{
						title: 'required',
						to: '/regles-validation/required'
					},
					{
						title: 'exactLength',
						to: '/regles-validation/exact-length'
					},
					{
						title: 'minLength',
						to: '/regles-validation/min-length'
					},
					{
						title: 'maxLength',
						to: '/regles-validation/max-length'
					},
					{
						title: 'email',
						to: '/regles-validation/email'
					},
					{
						title: 'isDateValid',
						to: '/regles-validation/is-date-valid'
					},
					{
						title: 'notAfterDate',
						to: '/regles-validation/not-after-date'
					},
					{
						title: 'notAfterToday',
						to: '/regles-validation/not-after-today'
					},
					{
						title: 'notBeforeDate',
						to: '/regles-validation/not-before-date'
					},
					{
						title: 'notBeforeToday',
						to: '/regles-validation/not-before-today'
					}
				]
			},
			{
				title: 'Classes utilitaires CSS',
				to: '/css/classes-utilitaires'
			},
			{
				title: 'Fonctions',
				items: [
					{
						title: 'formatDate',
						to: '/fonctions/formatDate'
					}
				]
			}
		]
	},
	{
		title: 'Guides',
		icon: mdiHumanMaleBoard,
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
			},
			{
				title: 'Variables d’environnement',
				to: '/guides/variables-environnement'
			},
			{
				title: 'Gestion des événements',
				to: '/guides/gestion-evenements'
			},
			{
				title: 'Utilisation du store',
				to: '/guides/utilisation-store'
			},
			{
				title: 'Tableau avec pagination',
				to: '/guides/tableau-pagination'
			},
			{
				title: 'v-model personnalisé',
				to: '/guides/v-model'
			},
			{
				title: 'Authentification avec token',
				to: '/guides/authentification-token'
			}
		]
	},
	{
		title: 'Politique de sécurité',
		icon: mdiSecurity,
		href: 'https://assurancemaladiesec.github.io/abuse/reporting/'
	}
];
