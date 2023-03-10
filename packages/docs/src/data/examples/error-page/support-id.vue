<template>
	<div>
		<ErrorPage
			:key="$route.fullPath"
			page-title="Page non trouvée"
			message="Il semblerait qu’il y ait eu une erreur !"
			code="404"
			no-btn
		/>

		<PageContainer
			size="s"
			spacing="pa-0 pb-8"
		>
			<VBtn
				color="primary"
				class="text-none"
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
	export default class ErrorPageSupportId extends Vue {
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
