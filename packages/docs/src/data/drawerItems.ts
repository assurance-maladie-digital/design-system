import { DrawerItem } from '~/types/drawer';

import {
	mdiSpeedometer,
	mdiScriptTextOutline,
	mdiViewDashboard,
	mdiCogs,
	mdiHumanMaleBoard,
	mdiSecurity,
	mdiBookOpenPageVariantOutline,
	mdiHammerWrench,
	mdiBridge,
	mdiChevronDoubleRight
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
						to: '/composants/structure/header-bar',
						appendIcon: mdiBridge
					},
					{
						title: 'SubHeader',
						to: '/composants/structure/sub-header',
						appendIcon: mdiBridge
					},
					{
						title: 'FooterBar',
						to: '/composants/structure/footer-bar',
						appendIcon: mdiBridge
					},
					{
						title: 'FooterWrapper',
						to: '/composants/structure/footer-wrapper',
						appendIcon: mdiBridge
					}
				]
			},
			{
				title: 'Layout',
				items: [
					{
						title: 'PageContainer',
						to: '/composants/layout/page-container',
						appendIcon: mdiBridge
					}
				]
			},
			{
				title: 'Navigation',
				items: [
					{
						title: 'ExternalLinks',
						to: '/composants/navigation/external-links',
						appendIcon: mdiBridge
					},
					{
						title: 'ContextualMenu',
						to: '/composants/navigation/contextual-menu',
						appendIcon: mdiBridge
					},
					{
						title: 'SkipLink',
						to: '/composants/navigation/skip-link',
						appendIcon: mdiBridge
					}
				]
			},
			{
				title: 'Boutons',
				items: [
					{
						title: 'BackBtn',
						to: '/composants/boutons/back-btn',
						appendIcon: mdiBridge
					},
					{
						title: 'BackToTopBtn',
						to: '/composants/boutons/back-to-top-btn',
						appendIcon: mdiBridge
					},
					{
						title: 'CopyBtn',
						to: '/composants/boutons/copy-btn',
						appendIcon: mdiBridge
					},
					{
						title: 'LangBtn',
						to: '/composants/boutons/lang-btn',
						appendIcon: mdiBridge
					},
					{
						title: 'DownloadBtn',
						to: '/composants/boutons/download-btn',
						appendIcon: mdiBridge
					},
					{
						title: 'FranceConnectBtn',
						to: '/composants/boutons/france-connect-btn',
						appendIcon: mdiBridge
					},
					{
						title: 'UserMenuBtn',
						to: '/composants/boutons/user-menu-btn',
						appendIcon: mdiBridge
					}
				]
			},
			{
				title: 'Formulaires',
				items: [
					{
						title: 'DatePicker',
						to: '/composants/formulaires/date-picker',
						appendIcon: mdiBridge
					},
					{
						title: 'FileUpload',
						to: '/composants/formulaires/file-upload',
						appendIcon: mdiBridge
					},
					{
						title: 'NirField',
						to: '/composants/formulaires/nir-field',
						appendIcon: mdiBridge
					},
					{
						title: 'PasswordField',
						to: '/composants/formulaires/password-field',
						appendIcon: mdiBridge
					},
					{
						title: 'PeriodField',
						to: '/composants/formulaires/period-field',
						appendIcon: mdiBridge
					},
					{
						title: 'PhoneField',
						to: '/composants/formulaires/phone-field',
						appendIcon: mdiBridge
					},
					{
						title: 'RangeField',
						to: '/composants/formulaires/range-field',
						appendIcon: mdiBridge
					},
					{
						title: 'SearchListField',
						to: '/composants/formulaires/search-list-field',
						appendIcon: mdiBridge
					},
					{
						title: 'SelectBtnField',
						to: '/composants/formulaires/select-btn-field',
						appendIcon: mdiBridge
					},
					{
						title: 'UploadWorkflow',
						to: '/composants/formulaires/upload-workflow',
						appendIcon: mdiBridge
					}
				]
			},
			{
				title: 'Tableaux',
				items: [
					{
						title: 'PaginatedTable',
						to: '/composants/tableaux/paginated-table',
						appendIcon: mdiBridge
					},
					{
						title: 'TableToolbar',
						to: '/composants/tableaux/table-toolbar',
						appendIcon: mdiBridge
					}
				]
			},
			{
				title: 'Filtres',
				items: [
					{
						title: 'FiltersInline',
						to: '/composants/filtres/filters-inline',
						appendIcon: mdiBridge
					},
					{
						title: 'FiltersSideBar',
						to: '/composants/filtres/filters-side-bar',
						appendIcon: mdiBridge
					},
					{
						title: 'FilterModule',
						to: '/composants/filtres/filter-module'
					}
				]
			},
			{
				title: 'Données',
				items: [
					{
						title: 'ChipList',
						to: '/composants/donnees/chip-list',
						appendIcon: mdiBridge
					},
					{
						title: 'DataList',
						to: '/composants/donnees/data-list',
						appendIcon: mdiBridge
					},
					{
						title: 'DataListGroup',
						to: '/composants/donnees/data-list-group',
						appendIcon: mdiBridge
					},
					{
						title: 'FilePreview',
						to: '/composants/donnees/file-preview',
						appendIcon: mdiBridge
					},
					{
						title: 'FileList',
						to: '/composants/donnees/file-list',
						appendIcon: mdiBridge
					}
				]
			},
			{
				title: 'Feedback',
				items: [
					{
						title: 'AlertWrapper',
						to: '/composants/feedback/alert-wrapper',
						appendIcon: mdiBridge
					},
					{
						title: 'DialogBox',
						to: '/composants/feedback/dialog-box',
						appendIcon: mdiBridge
					},
					{
						title: 'NotificationBar',
						to: '/composants/feedback/notification-bar',
						appendIcon: mdiBridge
					},
					{
						title: 'CookieBanner',
						to: '/composants/feedback/cookie-banner',
						appendIcon: mdiBridge
					},
					{
						title: 'HeaderLoading',
						to: '/composants/feedback/header-loading',
						appendIcon: mdiBridge
					},
					{
						title: 'RatingPicker',
						to: '/composants/feedback/rating-picker',
						appendIcon: mdiBridge
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
				to: '/templates/cookies-page',
				appendIcon: mdiBridge
			},
			{
				title: 'ErrorPage',
				to: '/templates/error-page',
				appendIcon: mdiBridge
			},
			{
				title: 'NotFoundPage',
				to: '/templates/not-found-page',
				appendIcon: mdiBridge
			},
			{
				title: 'MaintenancePage',
				to: '/templates/maintenance-page',
				appendIcon: mdiBridge
			}
		]
	},
	{
		title: 'Composants techniques',
		icon: mdiCogs,
		items: [
			{
				title: 'CustomIcon',
				to: '/composants-techniques/custom-icon',
				appendIcon: mdiBridge
			},
			{
				title: 'Module de notification',
				to: '/composants-techniques/module-notification',
				appendIcon: mdiBridge
			},
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
						title: 'localStorageUtility',
						to: '/composants-techniques/helpers/local-storage-utility'
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
					},
					{
						title: 'testUtils',
						to: '/composants-techniques/helpers/test-utils'
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
				title: 'Sous-chemin personnalisé',
				to: '/guides/sous-chemin'
			}
		]
	},
	{
		title: 'Outils de développement',
		icon: mdiHammerWrench,
		to: '/outils-de-developpement'
	},
	{
		title: 'Consignes de migration',
		icon: mdiChevronDoubleRight,
		to: '/migration-bridge'
	},
	{
		title: 'Politique de sécurité',
		icon: mdiSecurity,
		href: 'https://assurancemaladiesec.github.io/abuse/reporting/'
	}
];
