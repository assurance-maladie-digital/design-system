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
				to: '/fondamentaux/principes-de-design'
			},
			{
				title: 'Accessibilité',
				to: '/fondamentaux/accessibilite'
			},
			{
				title: 'Couleurs',
				to: '/fondamentaux/couleurs'
			},
			{
				title: 'Design Tokens',
				to: '/fondamentaux/design-tokens'
			},
			{
				title: 'Logo',
				to: '/fondamentaux/logo'
			},
			{
				title: 'Éco-conception',
				to: '/fondamentaux/eco-conception'
			}
		]
	},
	{
		title: 'Composants',
		icon: mdiViewDashboard,
		items: [
			{
				title: 'Vue d’ensemble',
				to: '/composants/vue-ensemble'
			},
			{
				divider: true
			},
			{
				title: 'Structure',
				items: [
					{
						title: 'HeaderBar',
						to: '/composants/structure/header-bar'
					},
					{
						title: 'SubHeader',
						to: '/composants/structure/sub-header'
					},
					{
						title: 'FooterBar',
						to: '/composants/structure/footer-bar'
					},
					{
						title: 'FooterWrapper',
						to: '/composants/structure/footer-wrapper'
					}
				]
			},
			{
				title: 'Layout',
				items: [
					{
						title: 'PageContainer',
						to: '/composants/layout/page-container'
					}
				]
			},
			{
				title: 'Navigation',
				items: [
					{
						title: 'ExternalLinks',
						to: '/composants/navigation/external-links'
					},
					{
						title: 'ContextualMenu',
						to: '/composants/navigation/contextual-menu'
					},
					{
						title: 'SkipLink',
						to: '/composants/navigation/skip-link'
					}
				]
			},
			{
				title: 'Boutons',
				items: [
					{
						title: 'BackBtn',
						to: '/composants/boutons/back-btn'
					},
					{
						title: 'BackToTopBtn',
						to: '/composants/boutons/back-to-top-btn'
					},
					{
						title: 'CopyBtn',
						to: '/composants/boutons/copy-btn'
					},
					{
						title: 'LangBtn',
						to: '/composants/boutons/lang-btn'
					},
					{
						title: 'DownloadBtn',
						to: '/composants/boutons/download-btn'
					},
					{
						title: 'FranceConnectBtn',
						to: '/composants/boutons/france-connect-btn'
					},
					{
						title: 'UserMenuBtn',
						to: '/composants/boutons/user-menu-btn'
					}
				]
			},
			{
				title: 'Formulaires',
				items: [
					{
						title: 'DatePicker',
						to: '/composants/formulaires/date-picker'
					},
					{
						title: 'FileUpload',
						to: '/composants/formulaires/file-upload'
					},
					{
						title: 'NirField',
						to: '/composants/formulaires/nir-field'
					},
					{
						title: 'PhoneField',
						to: '/composants/formulaires/phone-field'
					},
					{
						title: 'UploadWorkflow',
						to: '/composants/formulaires/upload-workflow'
					}
				]
			},
			{
				title: 'Tableaux',
				items: [
					{
						title: 'PaginatedTable',
						to: '/composants/tableaux/paginated-table'
					},
					{
						title: 'FilterModule',
						to: '/composants/tableaux/filter-module'
					},
					{
						title: 'TableToolbar',
						to: '/composants/tableaux/table-toolbar'
					}
				]
			},
			{
				title: 'Données',
				items: [
					{
						title: 'DataList',
						to: '/composants/donnees/data-list'
					},
					{
						title: 'DataListGroup',
						to: '/composants/donnees/data-list-group'
					},
					{
						title: 'FilePreview',
						to: '/composants/donnees/file-preview'
					}
				]
			},
			{
				title: 'Feedback',
				items: [
					{
						title: 'DialogBox',
						to: '/composants/feedback/dialog-box'
					},
					{
						title: 'NotificationBar',
						to: '/composants/feedback/notification-bar'
					},
					{
						title: 'CookieBanner',
						to: '/composants/feedback/cookie-banner'
					},
					{
						title: 'HeaderLoading',
						to: '/composants/feedback/header-loading'
					},
					{
						title: 'RatingPicker',
						to: '/composants/feedback/rating-picker'
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
				title: 'Vue d’ensemble',
				to: '/templates/vue-ensemble'
			},
			{
				divider: true
			},
			{
				title: 'CookiesPage',
				to: '/templates/cookies-page'
			},
			{
				title: 'ErrorPage',
				to: '/templates/error-page'
			},
			{
				title: 'NotFoundPage',
				to: '/templates/not-found-page'
			},
			{
				title: 'MaintenancePage',
				to: '/templates/maintenance-page'
			}
		]
	},
	{
		title: 'Composants techniques',
		icon: mdiCogs,
		items: [
			{
				title: 'Questionnaires',
				items: [
					{
						title: 'FormBuilder',
						to: '/composants-techniques/formulaires/form-builder'
					},
					{
						title: 'FormField',
						to: '/composants-techniques/formulaires/form-field'
					},
					{
						title: 'FormFieldList',
						to: '/composants-techniques/formulaires/form-field-list'
					}
				]
			},
			{
				title: 'Directives',
				items: [
					{
						title: 'Debounce',
						to: '/composants-techniques/directives/debounce'
					}
				]
			},
			{
				title: 'Règles de validation',
				items: [
					{
						title: 'email',
						to: '/composants-techniques/regles-de-validation/email'
					},
					{
						title: 'exactLength',
						to: '/composants-techniques/regles-de-validation/exact-length'
					},
					{
						title: 'isDateValid',
						to: '/composants-techniques/regles-de-validation/is-date-valid'
					},
					{
						title: 'matchPattern',
						to: '/composants-techniques/regles-de-validation/match-pattern'
					},
					{
						title: 'maxLength',
						to: '/composants-techniques/regles-de-validation/max-length'
					},
					{
						title: 'minLength',
						to: '/composants-techniques/regles-de-validation/min-length'
					},
					{
						title: 'notAfterDate',
						to: '/composants-techniques/regles-de-validation/not-after-date'
					},
					{
						title: 'notAfterToday',
						to: '/composants-techniques/regles-de-validation/not-after-today'
					},
					{
						title: 'notBeforeDate',
						to: '/composants-techniques/regles-de-validation/not-before-date'
					},
					{
						title: 'notBeforeToday',
						to: '/composants-techniques/regles-de-validation/not-before-today'
					},
					{
						title: 'required',
						to: '/composants-techniques/regles-de-validation/required'
					}
				]
			},
			{
				title: 'Fonctions',
				items: [
					{
						title: 'calcHumanFileSize',
						to: '/composants-techniques/fonctions/calc-human-file-size'
					},
					{
						title: 'copyToClipboard',
						to: '/composants-techniques/fonctions/copy-to-clipboard'
					},
					{
						title: 'debounce',
						to: '/composants-techniques/fonctions/debounce'
					},
					{
						title: 'downloadFile',
						to: '/composants-techniques/fonctions/download-file'
					},
					{
						title: 'formatDate',
						to: '/composants-techniques/fonctions/format-date'
					},
					{
						title: 'formatNir',
						to: '/composants-techniques/fonctions/format-nir'
					},
					{
						title: 'getFileExtension',
						to: '/composants-techniques/fonctions/get-file-extension'
					},
					{
						title: 'insertAt',
						to: '/composants-techniques/fonctions/insert-at'
					}
				]
			},
			{
				title: 'Helpers',
				items: [
					{
						title: 'convertToUnit',
						to: '/composants-techniques/helpers/convert-to-unit'
					},
					{
						title: 'deepCopy',
						to: '/composants-techniques/helpers/deep-copy'
					},
					{
						title: 'deepRemoveKeys',
						to: '/composants-techniques/helpers/deep-remove-keys'
					},
					{
						title: 'parseDate',
						to: '/composants-techniques/helpers/parse-date'
					},
					{
						title: 'propValidator',
						to: '/composants-techniques/helpers/prop-validator'
					},
					{
						title: 'registerComponents',
						to: '/composants-techniques/helpers/register-components'
					},
					{
						title: 'registerDirectives',
						to: '/composants-techniques/helpers/register-directives'
					},
					{
						title: 'ruleMessage',
						to: '/composants-techniques/helpers/rule-message'
					},
					{
						title: 'scrollBehavior',
						to: '/composants-techniques/helpers/scroll-behavior'
					}
				]
			},
			{
				title: 'Tests unitaires',
				items: [
					{
						title: 'installGlobalPlugins',
						to: '/composants-techniques/tests-unitaires/install-global-plugins'
					},
					{
						title: 'installRouter',
						to: '/composants-techniques/tests-unitaires/install-router'
					},
					{
						title: 'createRouter',
						to: '/composants-techniques/tests-unitaires/create-router'
					},
					{
						title: 'createStore',
						to: '/composants-techniques/tests-unitaires/create-store'
					},
					{
						title: 'createVuetifyInstance',
						to: '/composants-techniques/tests-unitaires/create-vuetify-instance'
					},
					{
						title: 'mockVFormRef',
						to: '/composants-techniques/tests-unitaires/mock-v-form-ref'
					},
					{
						title: 'mockTranslations',
						to: '/composants-techniques/tests-unitaires/mock-translations'
					}
				]
			},
			{
				title: 'Types utilitaires',
				to: '/composants-techniques/types-utilitaires'
			},
			{
				title: 'Classes utilitaires CSS',
				to: '/composants-techniques/classes-utilitaires-css'
			},
			{
				title: 'CustomIcon',
				to: '/composants-techniques/custom-icon'
			},
			{
				title: 'Module de notification',
				to: '/composants-techniques/module-notification'
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
				title: 'Gestion des textes',
				to: '/guides/gestion-textes'
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
				title: 'Tests e2e',
				to: '/guides/tests-e2e'
			},
			{
				title: 'Tests unitaires',
				to: '/guides/tests-unitaires'
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
			},
			{
				title: 'Utilisation des icônes',
				to: '/guides/utilisation-icones'
			},
			{
				title: 'Gestion des droits',
				to: '/guides/gestion-droits'
			}
		]
	},
	{
		title: 'Outils de développement',
		icon: mdiHammerWrench,
		to: '/outils-de-developpement'
	},
	{
		title: 'Politique de sécurité',
		icon: mdiSecurity,
		href: 'https://assurancemaladiesec.github.io/abuse/reporting/'
	}
];
