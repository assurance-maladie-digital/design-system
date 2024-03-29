<template>
	<div
		:class="spacingClass"
		class="vd-page-container d-flex justify-center"
	>
		<VSheet
			:width="containerSize"
			:color="color"
		>
			<slot />
		</VSheet>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { SizeEnum, SIZE_ENUM_VALUES } from './SizeEnum';

	import { IndexedObject } from '../../types';

	import { propValidator } from '../../helpers/propValidator';

	const Props = Vue.extend({
		props: {
			size: {
				type: String,
				default: SizeEnum.X_LARGE,
				validator: (value: string) => propValidator('size', SIZE_ENUM_VALUES, value)
			},
			spacing: {
				type: String,
				default: undefined
			},
			color: {
				type: String,
				default: 'transparent'
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class PageContainer extends MixinsDeclaration {
		get spacingClass(): string {
			if (this.spacing) {
				return this.spacing;
			}

			const spacingMapping: IndexedObject<string> = {
				xs: 'px-0',
				sm: 'px-4',
				md: 'px-8',
				lg: 'px-8',
				xl: 'px-8'
			};

			const spacing = spacingMapping[this.$vuetify.breakpoint.name];

			return `py-10 ${spacing}`;
		}

		get containerSize(): number {
			const sizeMapping: IndexedObject<number> = {
				[SizeEnum.X_LARGE]: 1440,
				[SizeEnum.LARGE]: 960,
				[SizeEnum.MEDIUM]: 800,
				[SizeEnum.SMALL]: 600
			};

			return sizeMapping[this.size];
		}
	}
</script>
