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
			pageTitle: 'Page non trouvée',
			message: 'Il semblerait qu’il y ait eu une erreur !'
		};

		options = {
			booleans: [
				'noBtn'
			],
			textFields: [
				'pageTitle',
				'message',
				'code'
			]
		};
	}
</script>
