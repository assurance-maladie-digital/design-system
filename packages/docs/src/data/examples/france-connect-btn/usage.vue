<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<FranceConnectBtn
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
	export default class FranceConnectBtnUsage extends Vue {
		defaultProps = {
			href: 'https://app.franceconnect.gouv.fr/'
		};

		options = {
			textFields: [
				'href'
			],
			booleans: [
				'connect-plus'
			]
		};
	}
</script>
