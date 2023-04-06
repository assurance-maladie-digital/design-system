<template>
	<div>
		<VDivider class="w-100 mb-6"></VDivider>

		<VContainer class="mb-10 pa-0">
			<div v-for="item in componentList" :key="item.title">
				<h3 class="mt-8 mb-6">{{ item.title }}</h3>
				<VRow>
					<VCol
						v-for="component in item.components"
						:key="component.name"
						cols="12"
						sm="6"
						md="4"
					>

						<NuxtLink
							:to="component.href"
							class="text-decoration-none"
						>
							<VCard class="fill-height" max-width="234">
								<DocImage
									:src="component.image"
									width="234"
									class="w-100"
								></DocImage>
								<VChip
									outlined
									color="green"
									x-small
									class="ma-2 pa-2"
									v-if="component.new"
								>
									Nouveau
								</VChip>
								<VChip
									outlined
									color="red"
									x-small
									class="ma-2 pa-2"
									v-if="component.deprecated"
								>
									Déprécié
								</VChip>
								<VCardTitle class="font-weight-bold">
									{{ component.name }}
								</VCardTitle>
								<VCardText>
									{{ component.description }}
								</VCardText>
							</VCard>
						</NuxtLink>
					</VCol>
				</VRow>
			</div>
		</VContainer>
	</div>
</template>

<script>
export default {
	data: () => ({
		componentList: [
			{
				title: 'Structure',
				components: [
					{
						name: 'HeaderBar',
						description: 'Utilisé pour afficher l’en-tête d’une page ainsi qu’une barre de navigation.',
						href: '/composants/structure/header-bar',
						image: 'components/header-bar.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'SubHeader',
						description: 'Utilisé pour afficher un bloc d’informations sous l’en-tête principale.',
						href: '/composants/structure/sub-header',
						image: 'components/sub-header.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'FooterBar',
						description: 'Utilisé pour afficher un pied de page.',
						href: '/composants/structure/footer-bar',
						image: 'components/footer-bar.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'FooterWrapper',
						description: 'Utilisé avec le composant FooterBtn pour afficher un pied de page.',
						href: '/composants/structure/footer-wrapper',
						image: 'components/footer-wrapper.svg',
						new: false,
						deprecated: true
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
						new: false,
						deprecated: false
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
						new: false,
						deprecated: false
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
						new: false,
						deprecated: false
					},
					{
						name: 'BackToTopBtn',
						description: 'Utilisé pour afficher un bouton permettant à l’utilisateur de remonter en haut d\'une page.',
						href: '/composants/boutons/back-to-top-btn',
						image: 'components/back-to-top-btn.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'CopyBtn',
						description: 'Utilisé pour afficher un bouton permettant à l’utilisateur de copier du texte.',
						href: '/composants/boutons/copy-btn',
						image: 'components/copy-btn.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'LangBtn',
						description: 'Utilisé pour permettre à l’utilisateur de choisir la langue de l’application',
						href: '/composants/boutons/lang-btn',
						image: 'components/lang-btn.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'DownloadBtn',
						description: 'Utilisé pour permettre à l’utilisateur de télécharger un document provenant d’une API.',
						href: '/composants/boutons/download-btn',
						image: 'components/download-btn.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'FranceConnectBtn',
						description: 'Utilisé pour afficher un bouton de connexion à FranceConnect.',
						href: '/composants/boutons/france-connect-btn',
						image: 'components/france-connect-btn.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'UserMenuBtn',
						description: 'Utilisé pour afficher un bouton activant un menu d’actions liées à l’utilisateur.',
						href: '/composants/boutons/user-menu-btn',
						image: 'components/user-menu-btn.svg',
						new: false,
						deprecated: false
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
						new: false,
						deprecated: false
					},
					{
						name: 'FormBuilder',
						description: 'Utilisé pour afficher un questionnaire.',
						href: '/composants/formulaires/form-builder',
						image: 'components/form-builder.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'FormField',
						description: 'Utilisé pour afficher un champ de formulaire.',
						href: '/composants/formulaires/form-field',
						image: 'components/form-field.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'FormFieldList',
						description: 'Utilisé pour afficher un formulaire composé d’une liste de champs.',
						href: '/composants/formulaires/form-field-list',
						image: 'components/form-field-list.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'FileUpload',
						description: 'Utilisé pour permettre à l’utilisateur de sélectionner ou de glisser-déposer des fichiers.',
						href: '/composants/formulaires/file-upload',
						image: 'components/file-upload.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'NirField',
						description: 'Utilisé pour permettre à l’utilisateur de saisir un numéro de Sécurité sociale (NIR).',
						href: '/composants/formulaires/nir-field',
						image: 'components/nir-field.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'PhoneField',
						description: 'Utilisé pour permettre à l’utilisateur de saisir un numéro de téléphone.',
						href: '/composants/formulaires/phone-field',
						image: 'components/phone-field.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'UploadWorkflow',
						description: 'Utilisé pour permettre à l’utilisateur de sélectionner une liste de fichiers.',
						href: '/composants/formulaires/upload-workflow',
						image: 'components/upload-workflow.svg',
						new: false,
						deprecated: false
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
						new: false,
						deprecated: false
					},
					{
						name: 'FilterModule',
						description: 'Utilisé pour permettre à l’utilisateur de sélectionner des filtres.',
						href: '/composants/tableaux/filter-module',
						image: 'components/filter-module.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'TableToolbar',
						description: 'Utilisé pour afficher une barre au-dessus des tableaux.',
						href: '/composants/tableaux/table-toolbar',
						image: 'components/table-toolbar.svg',
						new: false,
						deprecated: false
					}
				]
			},
			{
				title: 'Données',
				components: [
					{
						name: 'DataList',
						description: 'Utilisé pour afficher une liste de données.',
						href: '/composants/donnees/data-list',
						image: 'components/data-list.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'DataListGroup',
						description: 'Utilisé pour afficher une liste de DataList.',
						href: '/composants/donnees/data-list-group',
						image: 'components/data-list-group.svg',
						new: false,
						deprecated: false
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
						new: false,
						deprecated: false
					},
					{
						name: 'NotificationBar',
						description: 'Utilisé avec le module Vuex notification pour afficher des notifications à l’utilisateur.',
						href: '/composants/feedback/notification-bar',
						image: 'components/notification-bar.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'AccessibilityBanner',
						description: 'Utilisé pour permettre à l’utilisateur d\'accéder plus facilement au contenu principal',
						href: '/composants/feedback/accessibility-banner',
						image: 'components/accessibility-banner.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'CookieBanner',
						description: 'Utilisé pour permettre à l’utilisateur d’accepter ou non les cookies.',
						href: '/composants/feedback/cookie-banner',
						image: 'components/cookie-banner.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'HeaderLoading',
						description: 'Utilisé pour afficher un élément de chargement avec des dimensions personnalisées.',
						href: '/composants/feedback/header-loading',
						image: 'components/header-loading.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'RatingPicker',
						description: 'Permet de recueillir l\'avis d\'un utilisateur.',
						href: '/composants/feedback/rating-picker',
						image: 'components/rating-picker.svg',
						new: true,
						deprecated: false
					}
				]
			}
		]
	})
}
</script>

<style lang="scss" scoped>
	.v-card:hover {
		box-shadow: 0 0 0 2px #3f51b5 !important;
	}
	.v-chip {
		position: absolute;
		top: 155px;
		right: 0;
	}
	.v-divider {
		height: 0.5px;
		max-height: 0.5px;
		border-width: 0.5px;
	}
</style>
