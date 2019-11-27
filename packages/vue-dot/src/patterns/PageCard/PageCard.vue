<template>
	<VLayout
		class="vd-page"
		v-bind="options.layout"
	>
		<VCard
			v-bind="$attrs"
			class="vd-page-card"
			:class="computedClass"
		>
			<slot />
		</VCard>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import config from './config';

	import customizable, { Options } from '../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			/** Set min-height to 500px */
			minHeight: {
				type: Boolean,
				default: false
			},
			/** Remove shadow from VCard */
			noShadow: {
				type: Boolean,
				default: false
			},
			/**
			 * Customize the class binded to the VCard
			 * 'page-card' will be applied regardless of this property.
			 *
			 * This is needed since `v-bind="$attrs"` doesn't work with
			 * classes and styles.
			 */
			cardClass: {
				type: String,
				default: 'pa-0'
			}
		}
	});

	/**
	 * PageCard is a component that displays
	 * a VCard with specific parameters
	 */
	@Component({
		// Disable attributes inheritance since we bind them to the VCard
		inheritAttrs: false,
		mixins: [
			// Default configuration
			customizable(config)
		]
	})
	export default class PageCard extends Props {
		// Mixin computed data
		options!: Options;

		/** The CSS classes to apply to the VCard */
		get computedClass() {
			return [
				{
					'min-height': this.minHeight,
					'no-shadow': this.noShadow
				},
				this.cardClass
			];
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../tokens';

	$min-height: 500px;

	.vd-page {
		padding: 48px;
		align-items: center;
		flex-direction: column;
		max-width: 100%;
	}

	@media only screen and (max-width: 600px) {
		.vd-page {
			padding: 15px !important;
		}
	}

	.vd-page-card {
		width: $vd-page-width;
		padding: 16px 24px;

		// Override default shadow to fix it in IE
		box-shadow:
			-1px 3px 5px -2px rgba(0, 0, 0, .1),
			0 5px 4px 0 rgba(0, 0, 0, .1),
			0 1px 3px 0 rgba(0, 0, 0, .1),
			0 -1px 10px 0 rgba(0, 0, 0, .1);

		&.no-shadow {
			box-shadow: none;
		}

		&.min-height {
			min-height: $min-height;
		}
	}
</style>
