import { DrawerItem } from '~/types/drawer';

import {
	mdiSpeedometer,
	mdiScriptTextOutline,
	mdiViewDashboard,
	mdiCogs,
	mdiHumanMaleBoard,
	mdiSecurity,
	mdiBookOpenPageVariantOutline,
	mdiHammerWrench
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
				title: 'Installation',
				to: '/demarrer/installation'
			},
			{
				title: 'Roadmap',
				to: '/demarrer/roadmap'
			},
			{
				title: 'Notes de version',
				to: '/demarrer/notes-de-version'
			},
			{
				title: 'Contribuer',
				to: '/demarrer/contribuer'
			}
		]
	},
	{
		title: 'Fondamentaux',
		icon: mdiScriptTextOutline,
		items: [
			{
				title: 'Principes de design',
				to: '/demarrer/principes-design'
			},
			{
				title: 'Accessibilité',
				to: '/demarrer/accessibilite'
			},
			{
				title: 'Logo',
				to: '/composants/logo'
			}
		]
	},
	{
		title: 'Composants',
		icon: mdiViewDashboard,
		items: [
			{
				title: 'Structure',
				items: [
					{
						title: 'HeaderBar',
						to: '/composants/header-bar'
					},
					{
						title: 'SubHeader',
						to: '/composants/sub-header'
					},
					{
						title: 'FooterBar',
						to: '/composants/footer-bar'
					},
					{
						title: 'FooterWrapper',
						to: '/composants/footer-wrapper'
					}
				]
			},
			{
				title: 'Layout',
				items: [
					{
						title: 'PageContainer',
						to: '/composants/page-container'
					}
				]
			},
			{
				title: 'Navigation',
				items: [
					{
						title: 'ExternalLinks',
						to: '/composants/external-links'
					}
				]
			},
			{
				title: 'Boutons',
				items: [
					{
						title: 'CopyBtn',
						to: '/composants/copy-btn'
					},
					{
						title: 'LangBtn',
						to: '/composants/lang-btn'
					},
					{
						title: 'DownloadBtn',
						to: '/composants/download-btn'
					},
					{
						title: 'FranceConnectBtn',
						to: '/composants/france-connect-btn'
					},
					{
						title: 'UserMenuBtn',
						to: '/composants/user-menu-btn'
					}
				]
			},
			{
				title: 'Formulaires',
				items: [
					{
						title: 'DatePicker',
						to: '/composants/date-picker'
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
						title: 'FileUpload',
						to: '/composants/file-upload'
					},
					{
						title: 'UploadWorkflow',
						to: '/composants/upload-workflow'
					}
				]
			},
			{
				title: 'Tableaux',
				items: [
					{
						title: 'PaginatedTable',
						to: '/composants/paginated-table'
					},
					{
						title: 'FilterModule',
						to: '/composants/filter-module'
					},
					{
						title: 'TableToolbar',
						to: '/composants/table-toolbar'
					}
				]
			},
			{
				title: 'Affichage de données',
				items: [
					{
						title: 'DataList',
						to: '/composants/data-list'
					},
					{
						title: 'DataListGroup',
						to: '/composants/data-list-group'
					}
				]
			},
			{
				title: 'Feedback',
				items: [
					{
						title: 'DialogBox',
						to: '/composants/dialog-box'
					},
					{
						title: 'NotificationBar',
						to: '/composants/notification-bar'
					},
					{
						title: 'CookieBanner',
						to: '/composants/cookie-banner'
					},
					{
						title: 'HeaderLoading',
						to: '/composants/header-loading'
					}
				]
			}
		]
	},
	{
		title: 'Templates',
		icon: mdiBookOpenPageVariantOutline,
		items: [
			{
				title: 'CookiesPage',
				to: '/composants/cookies-page'
			},
			{
				title: 'ErrorPage',
				to: '/composants/error-page'
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
				title: 'Fonctions',
				items: [
					{
						title: 'calcHumanFileSize',
						to: '/fonctions/calc-human-file-size'
					},
					{
						title: 'copyToClipboard',
						to: '/fonctions/copy-to-clipboard'
					},
					{
						title: 'debounce',
						to: '/fonctions/debounce'
					},
					{
						title: 'downloadFile',
						to: '/fonctions/download-file'
					},
					{
						title: 'formatDate',
						to: '/fonctions/format-date'
					},
					{
						title: 'formatNir',
						to: '/fonctions/format-nir'
					},
					{
						title: 'getFileExtension',
						to: '/fonctions/get-file-extension'
					},
					{
						title: 'insertAt',
						to: '/fonctions/insert-at'
					}
				]
			},
			{
				title: 'Classes utilitaires CSS',
				to: '/css/classes-utilitaires'
			},
			{
				title: 'CustomIcon',
				to: '/composants/custom-icon'
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
				title: 'Appels API',
				to: '/guides/appels-api'
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
		title: 'Outils de développement',
		icon: mdiHammerWrench,
		items: [
			{
				title: 'Environnement de développement',
				to: '/outils-developpement/environnement-developpement'
			},
			{
				title: 'Navigateur',
				to: '/outils-developpement/navigateur'
			}
		]
	},
	{
		title: 'Politique de sécurité',
		icon: mdiSecurity,
		href: 'https://assurancemaladiesec.github.io/abuse/reporting/'
	}
];
