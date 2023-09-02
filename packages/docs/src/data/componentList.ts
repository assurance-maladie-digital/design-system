import { ComponentSection } from '~/types/components';
import { ComponentStatusEnum } from '~/constants/ComponentStatusEnum';

export const componentList: ComponentSection[] = [
	{
		title: 'Structure',
		components: [
			{
				name: 'HeaderBar',
				description: 'Utilisé pour afficher l’en-tête d’une page ainsi qu’une barre de navigation.',
				href: '/composants/structure/header-bar',
				image: 'components/header-bar.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'SubHeader',
				description: 'Utilisé pour afficher un bloc d’informations sous l’en-tête principale.',
				href: '/composants/structure/sub-header',
				image: 'components/sub-header.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'FooterBar',
				description: 'Utilisé pour afficher un pied de page.',
				href: '/composants/structure/footer-bar',
				image: 'components/footer-bar.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'FooterWrapper',
				description: 'Utilisé avec le composant FooterBtn pour afficher un pied de page.',
				href: '/composants/structure/footer-wrapper',
				image: 'components/footer-wrapper.svg',
				status: ComponentStatusEnum.DEPRECATED
			}
		]
	},
	{
		title: 'Layout',
		components: [
			{
				name: 'PageContainer',
				description: 'Conteneur transparent utilisé pour afficher une page.',
				href: '/composants/layout/page-container',
				image: 'components/page-container.svg',
				status: ComponentStatusEnum.READY
			}
		]
	},
	{
		title: 'Navigation',
		components: [
			{
				name: 'ExternalLinks',
				description: 'Utilisé pour afficher un menu avec une liste vers des liens externes.',
				href: '/composants/navigation/external-links',
				image: 'components/external-links.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'ContextualMenu',
				description: 'Utilisé pour pour afficher un menu avec une liste d’ancres pour la navigation.',
				href: '/composants/navigation/contextual-menu',
				image: 'components/contextual-menu.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'SkipLink',
				description: 'Utilisé pour permettre à l’utilisateur d’accéder plus facilement au contenu principal.',
				href: '/composants/navigation/skip-link',
				image: 'components/skip-link.svg',
				status: ComponentStatusEnum.READY
			}
		]
	},
	{
		title: 'Boutons',
		components: [
			{
				name: 'BackBtn',
				description: 'Utilisé pour permettre à l’utilisateur de revenir à la page précédente.',
				href: '/composants/boutons/back-btn',
				image: 'components/back-btn.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'BackToTopBtn',
				description: 'Utilisé pour afficher un bouton permettant à l’utilisateur de remonter en haut d’une page.',
				href: '/composants/boutons/back-to-top-btn',
				image: 'components/back-to-top-btn.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'CopyBtn',
				description: 'Utilisé pour afficher un bouton permettant à l’utilisateur de copier du texte.',
				href: '/composants/boutons/copy-btn',
				image: 'components/copy-btn.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'LangBtn',
				description: 'Utilisé pour permettre à l’utilisateur de choisir la langue de l’application',
				href: '/composants/boutons/lang-btn',
				image: 'components/lang-btn.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'DownloadBtn',
				description: 'Utilisé pour permettre à l’utilisateur de télécharger un document provenant d’une API.',
				href: '/composants/boutons/download-btn',
				image: 'components/download-btn.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'FranceConnectBtn',
				description: 'Utilisé pour afficher un bouton de connexion à FranceConnect.',
				href: '/composants/boutons/france-connect-btn',
				image: 'components/france-connect-btn.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'UserMenuBtn',
				description: 'Utilisé pour afficher un bouton activant un menu d’actions liées à l’utilisateur.',
				href: '/composants/boutons/user-menu-btn',
				image: 'components/user-menu-btn.svg',
				status: ComponentStatusEnum.READY
			}
		]
	},
	{
		title: 'Formulaires',
		components: [
			{
				name: 'DatePicker',
				description: 'Utilisé pour permettre à l’utilisateur de sélectionner ou de saisir une date.',
				href: '/composants/formulaires/date-picker',
				image: 'components/date-picker.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'FileUpload',
				description: 'Utilisé pour permettre à l’utilisateur de sélectionner ou de glisser-déposer des fichiers.',
				href: '/composants/formulaires/file-upload',
				image: 'components/file-upload.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'NirField',
				description: 'Utilisé pour permettre à l’utilisateur de saisir un numéro de Sécurité sociale (NIR).',
				href: '/composants/formulaires/nir-field',
				image: 'components/nir-field.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'PhoneField',
				description: 'Utilisé pour permettre à l’utilisateur de saisir un numéro de téléphone.',
				href: '/composants/formulaires/phone-field',
				image: 'components/phone-field.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'PeriodField',
				description: 'Utilisé pour permettre à l’utilisateur de saisir une période.',
				href: '/composants/formulaires/period-field',
				image: 'components/period-field.svg',
				status: ComponentStatusEnum.NEW
			},
			{
				name: 'SearchListField',
				description: 'Utilisé pour permettre à l’utilisateur de sélectionner une valeur dans une liste.',
				href: '/composants/formulaires/search-list-field',
				image: 'placeholder.svg',
				status: ComponentStatusEnum.NEW
			},
			{
				name: 'UploadWorkflow',
				description: 'Utilisé pour permettre à l’utilisateur de sélectionner une liste de fichiers.',
				href: '/composants/formulaires/upload-workflow',
				image: 'components/upload-workflow.svg',
				status: ComponentStatusEnum.READY
			}
		]
	},
	{
		title: 'Tableaux',
		components: [
			{
				name: 'PaginatedTable',
				description: 'Utilisé pour afficher une VDataTable de Vuetify avec une pagination persistante.',
				href: '/composants/tableaux/paginated-table',
				image: 'components/paginated-table.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'TableToolbar',
				description: 'Utilisé pour afficher une barre au-dessus des tableaux.',
				href: '/composants/tableaux/table-toolbar',
				image: 'components/table-toolbar.svg',
				status: ComponentStatusEnum.READY
			}
		]
	},
	{
		title: 'Filtres',
		components: [
			{
				name: 'FiltersInline',
				description: 'Utilisé pour afficher des filtres directement dans la page.',
				href: '/composants/filtres/filters-inline',
				image: 'components/filters-inline.svg',
				status: ComponentStatusEnum.NEW
			},
			{
				name: 'FiltersSidebar',
				description: 'Utilisé pour afficher des filtres dans un panel dédié.',
				href: '/composants/filtres/filters-side-bar',
				image: 'components/filters-sidebar.svg',
				status: ComponentStatusEnum.NEW
			},
			{
				name: 'FilterModule',
				description: 'Utilisé pour permettre à l’utilisateur de sélectionner des filtres.',
				href: '/composants/filtres/filter-module',
				image: 'components/filter-module.svg',
				status: ComponentStatusEnum.DEPRECATED
			}
		]
	},
	{
		title: 'Données',
		components: [
			{
				name: 'ChipList',
				description: 'Utilisé pour afficher une liste de puces.',
				href: '/composants/donnees/chip-list',
				image: 'placeholder.svg',
				status: ComponentStatusEnum.NEW
			},
			{
				name: 'DataList',
				description: 'Utilisé pour afficher une liste de données.',
				href: '/composants/donnees/data-list',
				image: 'components/data-list.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'DataListGroup',
				description: 'Utilisé pour afficher une liste de DataList.',
				href: '/composants/donnees/data-list-group',
				image: 'components/data-list-group.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'FileList',
				description: 'Utilisé pour afficher une liste de fichiers.',
				href: '/composants/donnees/file-list',
				image: 'components/file-list.svg',
				status: ComponentStatusEnum.NEW
			}
		]
	},
	{
		title: 'Feedback',
		components: [
			{
				name: 'DialogBox',
				description: 'Utilisé pour afficher une boîte de dialogue avec des boutons d’actions.',
				href: '/composants/feedback/dialog-box',
				image: 'components/dialog-box.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'NotificationBar',
				description: 'Utilisé avec le module Vuex notification pour afficher des notifications à l’utilisateur.',
				href: '/composants/feedback/notification-bar',
				image: 'components/notification-bar.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'CookieBanner',
				description: 'Utilisé pour permettre à l’utilisateur d’accepter ou non les cookies.',
				href: '/composants/feedback/cookie-banner',
				image: 'components/cookie-banner.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'HeaderLoading',
				description: 'Utilisé pour afficher un élément de chargement avec des dimensions personnalisées.',
				href: '/composants/feedback/header-loading',
				image: 'components/header-loading.svg',
				status: ComponentStatusEnum.READY
			},
			{
				name: 'RatingPicker',
				description: 'Permet de recueillir l’avis d’un utilisateur.',
				href: '/composants/feedback/rating-picker',
				image: 'components/rating-picker.svg',
				status: ComponentStatusEnum.READY
			}
		]
	}
];
