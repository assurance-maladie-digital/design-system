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
			code: '',
			pageTitle: 'Page non trouvée',
			message: 'Cette page n’existe pas ou a été déplacée.',
			btnText: 'Retour à l’accueil',
			image: false
		};

		options = {
			booleans: [
				'image'
			],
			textFields: [
				'code',
				'pageTitle',
				'message',
				'btnText'
			]
		};
	}
</script>
