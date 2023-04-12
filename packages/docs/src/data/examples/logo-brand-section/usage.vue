<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<LogoBrandSection
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
	export default class LogoUsage extends Vue {
		defaultProps = {
			theme: 'default',
			serviceTitle: 'Design System',
			serviceSubTitle: 'Documentation du Design System'
		};

		propsHiddenByDefault = [
			'theme'
		];

		options = {
			booleans: [
				'mobileVersion',
				'reduce-logo'
			],
			selects: {
				theme: [
					'default',
					'risque-pro',
					'cnam',
					'ameli',
					'ameli-pro',
					'compte-ameli',
					'compte-entreprise'
				]
			},
			textFields: [
				'serviceTitle',
				'serviceSubTitle'
			]
		};
	}
</script>
