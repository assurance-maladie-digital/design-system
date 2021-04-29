<template>
	<div
		:class="spacingClass"
		class="d-flex justify-center"
	>
		<VSheet
			:width="containerSize"
			:color="color"
			class="vd-page-container"
		>
			<slot />
		</VSheet>
	</div>
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
			},
			/** The background color of the container */
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

			const containerMargin: IndexedObject<string> = {
				xs: 'px-0',
				sm: 'px-4',
				md: 'px-8',
				lg: 'px-8',
				xl: 'px-8'
			};

			const margin = containerMargin[this.$vuetify.breakpoint.name];

			return `py-10 ${margin}`;
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
