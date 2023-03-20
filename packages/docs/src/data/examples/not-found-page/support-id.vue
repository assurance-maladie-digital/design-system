<template>
	<div>
		<NotFoundPage
			:key="$route.fullPath"
			class="mb-6"
		/>

		<PageContainer
			size="m"
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

<style lang="scss" scoped>
	// Update padding to give more space to the component for documentation
	.vd-page-container {
		padding: 0 !important;
	}
</style>
