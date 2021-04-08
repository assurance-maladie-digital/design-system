<template>
	<VSheet
		:width="containerSize"
		:class="paddingClass"
		class="vd-page-container"
	>
		<slot />
	</VSheet>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { IndexedObject } from '../../types';

	const Props = Vue.extend({
		props: {
			/**
			 * Define the size of the container
			 *
			 * Default value: "xl"
			 */
			size: {
				type: String,
				validator: value => [
					'xl',
					'l',
					'm',
					'xs'
				].includes(value.toLowerCase()),
				default: 'xl'
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class PageContainer extends MixinsDeclaration {
		/**
		 * Use vutify breackpoint to return responsive margin for the container
		 */
		get paddingClass(): string {
			const breakpoints : IndexedObject<string> = {
				'xs': 'mx-0',
				'sm': 'mx-4',
				'md': 'mx-8',
				'lg': 'mx-8',
				'xl': 'mx-8'
			};
			return breakpoints[this.$vuetify.breakpoint.name];
		}

		/**
		 * Use "size" props to define the size of the container
		 */
		get containerSize(): number {
			const containerWidth : IndexedObject<number> = {
				'xl': 1440,
				'l': 960,
				'm': 800,
				'xs': 600
			};
			return containerWidth[this.size];
		}
	}
</script>
