<template>
	<VCard
		:id="target"
		width="100%"
		max-height="300px"
		class="overflow-y-auto"
	>
		<HeaderBar
			v-bind="$attrs"
			:target="target"
			:class="{ 'sticky-header-example': $attrs.sticky }"
			v-on="$listeners"
		/>

		<VSheet
			height="600px"
			class="d-flex flex-column align-center"
		/>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types'

	const EXAMPLE_TARGET = 'header-bar-usage';

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
		target = EXAMPLE_TARGET;

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

<style lang="scss" scoped>
	.sticky-header-example {
		position: sticky !important;
		top: 0;

		:deep(.vd-header-bar) {
			position: static !important;
		}
	}
</style>
