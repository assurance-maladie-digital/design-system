<template>
	<div>
		<VDivider class="w-100 mt-3 mb-6"></VDivider>

		<VContainer class="mb-10">
			<h2 class="mb-4">Structure</h2>
			<VRow>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/structure/header-bar" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/header.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">HeaderBar</VCardTitle>
							<VCardText>Utilisé pour afficher l’en-tête d’une page ainsi qu’une barre de navigation.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/structure/sub-header" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/sub-header.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">SubHeader</VCardTitle>
							<VCardText>Utilisé pour afficher un bloc d’informations sous l’en-tête principale.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/structure/footer-bar" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/footer-bar.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">FooterBar</VCardTitle>
							<VCardText>Utilisé pour afficher un pied de page.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/structure/footer-wrapper" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/footer-wrapper.svg" width="234" class="w-100"></DocImage>
							<v-chip outlined color="red" x-small class="ma-2 pa-2">Déprécié</v-chip>
							<VCardTitle class="font-weight-bold">FooterWrapper</VCardTitle>
							<VCardText>Utilisé avec le composant FooterBtn pour afficher un pied de page.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
			</VRow>
			<h2 class="mt-8 mb-4">Layout</h2>
			<VRow>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/layout/page-container" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/page-container.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">PageContainer</VCardTitle>
							<VCardText>Conteneur transparent utilisé pour afficher une page.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
			</VRow>
			<h2 class="mt-8 mb-4">Navigation</h2>
			<VRow>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/navigation/external-links" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/externals-links.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">ExternalsLinks</VCardTitle>
							<VCardText>Utilisé pour afficher un menu avec une liste vers des liens externes.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
			</VRow>
			<h2 class="mt-8 mb-4">Boutons</h2>
			<VRow>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/boutons/back-btn" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/back-btn.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">BackBtn</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur de revenir à la page précédente.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/boutons/back-to-top-btn" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/back-to-top-btn.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">BackToTopBtn</VCardTitle>
							<VCardText>Utilisé pour afficher un bouton permettant à l’utilisateur de remonter en haut d'une page.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/boutons/copy-btn" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/copy-btn.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">CopyBtn</VCardTitle>
							<VCardText>Utilisé pour afficher un bouton permettant à l’utilisateur de copier du texte.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/boutons/lang-btn" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/lang-btn.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">LangBtn</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur de choisir la langue de l’application.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/boutons/download-btn" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/download-btn.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">DownloadBtn</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur de télécharger un document provenant d’une API.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/boutons/france-connect-btn" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/france-connect-btn.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">FranceConnectBtn</VCardTitle>
							<VCardText>Utilisé pour afficher un bouton de connexion à FranceConnect.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/boutons/user-menu-btn" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/user-menu-btn.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">UserMenuBtn</VCardTitle>
							<VCardText>Utilisé pour afficher un bouton activant un menu d’actions liées à l’utilisateur.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
			</VRow>
			<h2 class="mt-8 mb-4">Formulaires</h2>
			<VRow>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/formulaires/date-picker" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/date-picker.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">DatePicker</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur de sélectionner ou de saisir une date.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/formulaires/form-builder" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/form-builder.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">FormBuilder</VCardTitle>
							<VCardText>Utilisé pour afficher un questionnaire.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/formulaires/form-field" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/form-field.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">FormField</VCardTitle>
							<VCardText>Utilisé pour afficher un champ de formulaire.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/formulaires/form-field-list" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/form-field-list.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">FormFieldList</VCardTitle>
							<VCardText>Utilisé pour afficher un formulaire composé d’une liste de champs.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/formulaires/file-upload" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/file-upload.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">FileUpload</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur de sélectionner ou de glisser-déposer des fichiers.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/formulaires/nir-field" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/nir-field.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">NirField</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur de saisir un numéro de Sécurité sociale (NIR).</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/formulaires/phone-field" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/phone-field.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">PhoneField</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur de saisir un numéro de téléphone.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/formulaires/upload-workflow" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/upload-workflow.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">UploadWorkflow</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur de sélectionner une liste de fichiers.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
			</VRow>
			<h2 class="mt-8 mb-4">Tableaux</h2>
			<VRow>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/tableaux/paginated-table" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/paginated-table.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">PaginatedTable</VCardTitle>
							<VCardText>Utilisé pour afficher une VDataTable de Vuetify avec une pagination persistante.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/tableaux/filter-module" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/filter-module.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">FilterModule</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur de sélectionner des filtres.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/tableaux/table-toolbar" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/table-toolbar.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">TableToolbar</VCardTitle>
							<VCardText>Utilisé pour afficher une barre au-dessus des tableaux.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
			</VRow>
			<h2 class="mt-8 mb-4">Données</h2>
			<VRow>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/donnees/data-list" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/data-list.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">DataList</VCardTitle>
							<VCardText>Utilisé pour afficher une liste d’informations.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/donnees/data-list-group" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/data-list-group.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">DataListGroup</VCardTitle>
							<VCardText>Utilisé pour afficher une liste de DataList.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
			</VRow>
			<h2 class="mt-8 mb-4">Feedback</h2>
			<VRow>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/feedback/dialog-box" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/dialog-box.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">DialogBox</VCardTitle>
							<VCardText>Utilisé pour afficher une boîte de dialogue avec des boutons d’actions.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/feedback/notification-bar" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/notification-bar.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">NotificationBar</VCardTitle>
							<VCardText>Utilisé avec le module Vuex notification pour afficher des notifications à l’utilisateur.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/feedback/accessibility-banner" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/accessibility-banner.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">AccessibilityBanner</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur d'accéder plus facilement au contenu principal.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/feedback/cookie-banner" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/cookie-banner.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">CookieBanner</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur d’accepter ou non les cookies.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/feedback/header-loading" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/header-loading.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">HeaderLoading</VCardTitle>
							<VCardText>Utilisé pour afficher un élément de chargement avec des dimensions personnalisées.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../composants/feedback/rating-picker" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="components/rating-picker.svg" width="234" class="w-100"></DocImage>
							<v-chip outlined color="green" x-small class="ma-2 pa-2">Nouveau</v-chip>
							<VCardTitle class="font-weight-bold">RatingPicker</VCardTitle>
							<VCardText>Permet de receuillir l'avis d'un utilisateur.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
			</VRow>
		</VContainer>
	</div>
</template>

<style lang="scss" scoped>
	.VCard:hover {
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
