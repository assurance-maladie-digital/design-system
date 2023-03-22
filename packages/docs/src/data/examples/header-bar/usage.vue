<template>
	<div class="d-flex flex-wrap align-center justify-center w-100 wrapper">
		<HeaderBar
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types'

	const navigationItems: NavigationItem[] = [
		{
			label: 'Accueil'
		},
		{
			label: 'Mes projets'
		}
	];

	@Component({
		inheritAttrs: false
	})
	export default class HeaderBarUsage extends Vue {
		defaultProps = {
			theme: 'default',
			navigationItems
		};

		propsHiddenByDefault = [
			'theme'
		];

		options = {
			booleans: [
				'mobileVersion',
				'sticky'
			],
			selects: {
				theme: [
					'default',
					'risque-pro',
					'cnam',
					'ameli',
					'ameli-pro',
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

<style lang="scss">
.wrapper {
	.v-app-bar--fixed {
		z-index: 15;
	}
}
</style>
