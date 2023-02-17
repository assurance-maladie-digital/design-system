<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<ErrorPage
			v-bind="$attrs"
			v-on="$listeners"
			btn-route="/templates/error-page"
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
			btnText: 'Actualiser la page'
		};

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
