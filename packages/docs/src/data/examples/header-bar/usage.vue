<template>
	<VCard
		:id="target"
		:class="{
			'd-flex flex-wrap align-center justify-center': !$attrs.sticky,
			'overflow-y-auto': $attrs.sticky
		}"
		:elevation="$attrs.sticky ? undefined : 0"
		width="100%"
		max-height="250px"
	>
		<HeaderBar
			v-bind="$attrs"
			:target="target"
			:class="{
				'sticky-header-example': $attrs.sticky,
				'hide-secondary-title-overflow': $attrs.theme === ThemeEnum.COMPTE_ENTREPRISE
			}"
			v-on="$listeners"
		/>

		<VSheet
			v-if="$attrs.sticky"
			height="600px"
			class="d-flex flex-column align-center"
		/>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types';
	import { ThemeEnum } from '@cnamts/vue-dot/src/constants/enums/ThemeEnum';

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
		ThemeEnum = ThemeEnum;
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

		&.hide-secondary-title-overflow :deep(.vd-header-brand-section) {
			overflow: hidden;
			white-space: nowrap;
		}
	}
</style>
