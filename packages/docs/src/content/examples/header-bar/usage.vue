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
			selects: {
				theme: [
					'default',
					'risque-pro',
					'cnam',
					'ameli',
					'ameli-pro'
				]
			},
			textFields: [
				'serviceTitle',
				'serviceSubTitle'
			]
		};
	}
</script>
