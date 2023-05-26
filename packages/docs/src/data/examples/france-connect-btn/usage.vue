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
			href: 'https://app.franceconnect.gouv.fr/',
			width: 300,
			height: 78
		};

		propsHiddenByDefault = [
			'width',
			'height'
		];

		options = {
			textFields: [
				'href',
				'width',
				'height'
			],
			booleans: [
				'connect-plus'
			]
		};
	}
</script>
