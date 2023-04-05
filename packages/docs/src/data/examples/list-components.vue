<template>
	<div>
		<v-divider class="w-100 mt-3 mb-6"></v-divider>

		<v-container class="mb-10">
			<h2 class="mb-4">Structure</h2>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/structure/header-bar" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/header.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">HeaderBar</v-card-title>
							<v-card-text>Utilisé pour afficher l’en-tête d’une page ainsi qu’une barre de navigation.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/structure/sub-header" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/sub-header.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">SubHeader</v-card-title>
							<v-card-text>Utilisé pour afficher un bloc d’informations sous l’en-tête principale.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/structure/footer-bar" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/footer-bar.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">FooterBar</v-card-title>
							<v-card-text>Utilisé pour afficher un pied de page.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/structure/footer-wrapper" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/footer-wrapper.svg" width="234" class="w-100"></doc-image>
							<v-chip outlined color="red" x-small class="ma-2 pa-2">Déprécié</v-chip>
							<v-card-title class="font-weight-bold">FooterWrapper</v-card-title>
							<v-card-text>Utilisé avec le composant FooterBtn pour afficher un pied de page.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
			</v-row>
			<h2 class="mt-8 mb-4">Layout</h2>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/layout/page-container" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/page-container.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">PageContainer</v-card-title>
							<v-card-text>Conteneur transparent utilisé pour afficher une page.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
			</v-row>
			<h2 class="mt-8 mb-4">Navigation</h2>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/navigation/external-links" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/externals-links.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">ExternalsLinks</v-card-title>
							<v-card-text>Utilisé pour afficher un menu avec une liste vers des liens externes.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
			</v-row>
			<h2 class="mt-8 mb-4">Boutons</h2>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/boutons/back-btn" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/back-btn.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">BackBtn</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur de revenir à la page précédente.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/boutons/back-to-top-btn" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/back-to-top-btn.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">BackToTopBtn</v-card-title>
							<v-card-text>Utilisé pour afficher un bouton permettant à l’utilisateur de remonter en haut d'une page.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/boutons/copy-btn" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/copy-btn.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">CopyBtn</v-card-title>
							<v-card-text>Utilisé pour afficher un bouton permettant à l’utilisateur de copier du texte.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/boutons/lang-btn" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/lang-btn.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">LangBtn</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur de choisir la langue de l’application.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/boutons/download-btn" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/download-btn.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">DownloadBtn</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur de télécharger un document provenant d’une API.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/boutons/france-connect-btn" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/france-connect-btn.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">FranceConnectBtn</v-card-title>
							<v-card-text>Utilisé pour afficher un bouton de connexion à FranceConnect.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/boutons/user-menu-btn" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/user-menu-btn.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">UserMenuBtn</v-card-title>
							<v-card-text>Utilisé pour afficher un bouton activant un menu d’actions liées à l’utilisateur.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
			</v-row>
			<h2 class="mt-8 mb-4">Formulaires</h2>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/formulaires/date-picker" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/date-picker.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">DatePicker</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur de sélectionner ou de saisir une date.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/formulaires/form-builder" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/form-builder.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">FormBuilder</v-card-title>
							<v-card-text>Utilisé pour afficher un questionnaire.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/formulaires/form-field" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/form-field.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">FormField</v-card-title>
							<v-card-text>Utilisé pour afficher un champ de formulaire.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/formulaires/form-field-list" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/form-field-list.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">FormFieldList</v-card-title>
							<v-card-text>Utilisé pour afficher un formulaire composé d’une liste de champs.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/formulaires/file-upload" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/file-upload.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">FileUpload</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur de sélectionner ou de glisser-déposer des fichiers.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/formulaires/nir-field" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/nir-field.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">NirField</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur de saisir un numéro de Sécurité sociale (NIR).</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/formulaires/phone-field" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/phone-field.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">PhoneField</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur de saisir un numéro de téléphone.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/formulaires/upload-workflow" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/upload-workflow.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">UploadWorkflow</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur de sélectionner une liste de fichiers.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
			</v-row>
			<h2 class="mt-8 mb-4">Tableaux</h2>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/tableaux/paginated-table" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/paginated-table.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">PaginatedTable</v-card-title>
							<v-card-text>Utilisé pour afficher une VDataTable de Vuetify avec une pagination persistante.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/tableaux/filter-module" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/filter-module.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">FilterModule</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur de sélectionner des filtres.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/tableaux/table-toolbar" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/table-toolbar.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">TableToolbar</v-card-title>
							<v-card-text>Utilisé pour afficher une barre au-dessus des tableaux.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
			</v-row>
			<h2 class="mt-8 mb-4">Données</h2>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/donnees/data-list" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/data-list.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">DataList</v-card-title>
							<v-card-text>Utilisé pour afficher une liste d’informations.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/donnees/data-list-group" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/data-list-group.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">DataListGroup</v-card-title>
							<v-card-text>Utilisé pour afficher une liste de DataList.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
			</v-row>
			<h2 class="mt-8 mb-4">Feedback</h2>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/feedback/dialog-box" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/dialog-box.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">DialogBox</v-card-title>
							<v-card-text>Utilisé pour afficher une boîte de dialogue avec des boutons d’actions.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/feedback/notification-bar" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/notification-bar.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">NotificationBar</v-card-title>
							<v-card-text>Utilisé avec le module Vuex notification pour afficher des notifications à l’utilisateur.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/feedback/accessibility-banner" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/accessibility-banner.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">AccessibilityBanner</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur d'accéder plus facilement au contenu principal.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/feedback/cookie-banner" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/cookie-banner.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">CookieBanner</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur d’accepter ou non les cookies.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/feedback/header-loading" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/header-loading.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">HeaderLoading</v-card-title>
							<v-card-text>Utilisé pour afficher un élément de chargement avec des dimensions personnalisées.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../composants/feedback/rating-picker" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="components/rating-picker.svg" width="234" class="w-100"></doc-image>
							<v-chip outlined color="green" x-small class="ma-2 pa-2">Nouveau</v-chip>
							<v-card-title class="font-weight-bold">RatingPicker</v-card-title>
							<v-card-text>Permet de receuillir l'avis d'un utilisateur.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

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
