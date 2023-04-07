<template>
	<div>
		<VDivider class="w-100 mb-10"></VDivider>

		<VContainer class="pa-0">
			<div v-for="item in componentList" :key="item.title">
				<VRow>
					<VCol
						v-for="component in item.components"
						:key="component.name"
						cols="12"
						sm="6"
						md="4"
						class="d-flex justify-center"
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
				components: [
					{
						name: 'CookiesPage',
						description: 'Utilisé pour permettre à l’utilisateur de gérer ses préférences de cookies.',
						href: '/templates/cookies-page',
						image: 'templates/cookies-page.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'ErrorPage',
						description: 'Utilisé pour afficher une page d’erreur.',
						href: '/templates/error-page',
						image: 'templates/error-page.svg',
						new: false,
						deprecated: false
					},
					{
						name: 'NotFoundPage',
						description: 'Utilisé pour afficher une page d\'erreur.',
						href: '/templates/not-found-page',
						image: 'templates/not-found-page.svg',
						new: true,
						deprecated: false
					},
					{
						name: 'MaintenancePage',
						description: 'Utilisé pour afficher une page de maintenance.',
						href: '/templates/maintenance-page',
						image: 'templates/maintenance-page.svg',
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
