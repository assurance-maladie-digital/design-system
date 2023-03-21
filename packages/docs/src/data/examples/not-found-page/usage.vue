<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<NotFoundPage
			v-bind="$attrs"
			v-on="$listeners"
			btn-route="/"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class NotFoundPageUsage extends Vue {
		defaultProps = {
			pageTitle: 'Page non trouvée',
			message: 'Cette page n’existe pas ou a été déplacée.',
			btnText: 'Retour à l’accueil'
		};

		propsHiddenByDefault = [
			'pageTitle',
			'message',
			'btnText'
		];

		options = {
			textFields: [
				'pageTitle',
				'message',
				'btnText'
			]
		};
	}
</script>

<style lang="scss" scoped>
	// Update padding to give more space to the component for documentation
	.vd-page-container {
		padding: 0 !important;

		:deep(.v-card) {
			padding: 24px !important;
		}
	}
</style>
