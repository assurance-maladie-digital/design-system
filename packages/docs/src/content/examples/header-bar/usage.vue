<template>
	<div class="d-flex flex-wrap align-center justify-center w-100">
		<HeaderBar
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
	export default class HeaderBarUsage extends Vue {
		defaultProps = {
			theme: 'cnam'
		};

		propsHiddenByDefault = [
			'theme',
			'displaySearchBar',
			'navBar',
			'responsiveMenuPosition'
		];

		options = {
			booleans: [
				'displaySearchBar',
				'navBar'
			],
			textFields: [
			],
			selects: {
				theme: [
					'ameli',
					'ameli-pro',
					'risque-pro',
					'cnam',
					'custom'
				],
				responsiveMenuPosition: [
					'header',
					'sub-header',
					'hide'
				]
			}
		};
	}
</script>
