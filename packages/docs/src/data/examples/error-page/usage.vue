<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<ErrorPage
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
		inheritAttrs: false,
	})
	export default class ErrorPageUsage extends Vue {
		defaultProps = {
			pageTitle: 'Erreur serveur',
			message: 'La page ne fonctionne pas correctement.',
			code: '500',
			btnText: 'Retour à l’accueil'
		};

		propsHiddenByDefault = [
			'btnText'
		];

		options = {
			booleans: [
				'noBtn'
			],
			textFields: [
				'pageTitle',
				'message',
				'code',
				'btnText'
			]
		};
	}
</script>

<style lang="scss" scoped>
	.vd-page-container {
		padding: 0 !important;

		:deep(.v-card) {
			box-shadow: none !important;
			padding: 24px !important;

			.order-sm-first {
				order: 1 !important;
			}

			.text-sm-left {
				text-align: center !important;
			}
		}
	}
</style>
