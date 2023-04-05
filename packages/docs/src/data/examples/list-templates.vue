<template>
	<div>
		<VDivider class="w-100 mt-3 mb-6"></VDivider>

		<VContainer class="pa-0">
			<VRow>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../templates/cookies-page" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="templates/cookies-page.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">CookiesPage</VCardTitle>
							<VCardText>Utilisé pour permettre à l’utilisateur de gérer ses préférences de cookies.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../templates/error-page" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="templates/error-page.svg" width="234" class="w-100"></DocImage>
							<VCardTitle class="font-weight-bold">ErrorPage</VCardTitle>
							<VCardText>Utilisé pour afficher une page d’erreur.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../templates/notfound-page" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="templates/not-found-page.svg" width="234" class="w-100"></DocImage>
							<VChip outlined color="green" x-small class="ma-2 pa-2">Nouveau</VChip>
							<VCardTitle class="font-weight-bold">NotFoundPage</VCardTitle>
							<VCardText>Utilisé pour afficher une page d'erreur.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
				<VCol cols="12" sm="6" md="4">
					<NuxtLink to="../templates/maintenance-page" class="text-decoration-none">
						<VCard class="fill-height" max-width="234">
							<DocImage src="templates/maintenance-page.svg" width="234" class="w-100"></DocImage>
							<VChip outlined color="green" x-small class="ma-2 pa-2">Nouveau</VChip>
							<VCardTitle class="font-weight-bold">MaintenancePage</VCardTitle>
							<VCardText>Utilisé pour afficher une page de maintenance.</VCardText>
						</VCard>
					</NuxtLink>
				</VCol>
			</VRow>
		</VContainer>
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
