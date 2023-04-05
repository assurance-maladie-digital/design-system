<template>
	<div>
		<v-divider class="w-100 mt-3 mb-6"></v-divider>

		<v-container>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../templates/cookies-page" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="templates/cookies-page.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">CookiesPage</v-card-title>
							<v-card-text>Utilisé pour permettre à l’utilisateur de gérer ses préférences de cookies.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../templates/error-page" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="templates/error-page.svg" width="234" class="w-100"></doc-image>
							<v-card-title class="font-weight-bold">ErrorPage</v-card-title>
							<v-card-text>Utilisé pour afficher une page d’erreur.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../templates/notfound-page" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="templates/not-found-page.svg" width="234" class="w-100"></doc-image>
							<v-chip outlined color="green" x-small class="ma-2 pa-2">Nouveau</v-chip>
							<v-card-title class="font-weight-bold">NotFoundPage</v-card-title>
							<v-card-text>Utilisé pour afficher une page d'erreur.</v-card-text>
						</v-card>
					</nuxt-link>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<nuxt-link to="../templates/maintenance-page" class="text-decoration-none">
						<v-card class="fill-height" max-width="234">
							<doc-image src="templates/maintenance-page.svg" width="234" class="w-100"></doc-image>
							<v-chip outlined color="green" x-small class="ma-2 pa-2">Nouveau</v-chip>
							<v-card-title class="font-weight-bold">MaintenancePage</v-card-title>
							<v-card-text>Utilisé pour afficher une page de maintenance.</v-card-text>
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
