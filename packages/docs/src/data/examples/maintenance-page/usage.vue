<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<MaintenancePage
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class MaintenancePageUsage extends Vue {
		defaultProps = {
			pageTitle: 'Maintenance en cours',
			message: 'L’application n’est pas disponible pour le moment, veuillez nous excuser pour la gêne occasionnée.'
		};

		propsHiddenByDefault = [
			'pageTitle',
			'message'
		];

		options = {
			textFields: [
				'pageTitle',
				'message'
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
			margin: 0 !important;
			box-shadow: none !important;
			@media (min-width: 600px) {
				.col-sm-6 {
					flex: 0 0 100%;
					max-width: 100%;
				}
				.order-sm-first {
					order: 1 !important;
				}
				.text-sm-left {
					text-align: center !important;
				}
			}
		}
	}
</style>
