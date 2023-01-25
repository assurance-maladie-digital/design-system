<template>
	<div>
		<MaintenancePage
			:key="$route.fullPath"
			page-title="Maintenance en cours"
			message="L’application n’est pas disponible pour le moment, veuillez nous excuser pour la gêne occasionnée"
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
	export default class MaintenancePageSupportId extends Vue {
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
