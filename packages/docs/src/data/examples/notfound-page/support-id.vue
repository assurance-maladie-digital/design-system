<template>
	<div>
		<NotFoundPage
			:key="$route.fullPath"
			code="404"
			page-title="Page non trouvée"
			message="Cette page n’existe pas ou a été déplacée."
		/>

		<PageContainer
			size="s"
			spacing="pa-0 pb-8"
		>
			<VBtn
				color="primary"
				@click="setSupportId"
			>
				Afficher l’identifiant de support
			</VBtn>
		</PageContainer>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class NotFoundPageSupportId extends Vue {
		setSupportId(): void {
			this.$router.push({
				path: this.$route.path,
				query: {
					support_id: '1178926558455813315'
				}
			});
		}
	}
</script>
