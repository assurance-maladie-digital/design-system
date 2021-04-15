<template>
	<VSheet
		:width="containerSize"
		:class="spacingClass"
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
			 * The size of the container
			 *
			 * @default xl
			 */
			size: {
				type: String,
				default: 'xl',
				validator(value) {
					return ['xl', 'l', 'm', 's'].includes(value.toLowerCase());
				}
			},
			/** Overwrite default spacing */
			spacing: {
				type: String,
				default: undefined
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

			const containerMargin: IndexedObject<string> = {
				xs: 'mx-0',
				sm: 'mx-4',
				md: 'mx-8',
				lg: 'mx-8',
				xl: 'mx-8'
			};

			const margin = containerMargin[this.$vuetify.breakpoint.name];

			return `my-10 ${margin}`;
		}

		get containerSize(): number {
			const containerWidth: IndexedObject<number> = {
				xl: 1440,
				l: 960,
				m: 800,
				s: 600
			};

			return containerWidth[this.size];
		}
	}
</script>
