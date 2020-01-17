<template>
	<VLayout
		class="vd-page"
		v-bind="options.layout"
		:class="paddingClass"
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
	import Component, { mixins } from 'vue-class-component';

	import config from './config';

	import customizable from '../../mixins/customizable';

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
				default: undefined
			},
			/**
			 * Customize the padding of the VCard
			 *
			 * Separating this from the cardClass allows to change a class
			 * without having to defining the padding if not needed
			 */
			cardPadding: {
				type: String,
				default: 'px-6 py-4'
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * PageCard is a component that displays a
	 * VCard with specific parameters
	 */
	@Component({
		// Disable attributes inheritance since we bind them to the VCard
		inheritAttrs: false
	})
	export default class PageCard extends MixinsDeclaration {
		/** The CSS classes to apply to the VCard */
		get computedClass() {
			return [
				{
					'vd-min-height': this.minHeight,
					'vd-no-shadow': this.noShadow
				},
				this.cardPadding,
				this.cardClass
			];
		}

		get paddingClass() {
			return this.$vuetify.breakpoint.smAndDown ? 'pa-4' : 'pa-8';
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../tokens';

	$min-height: 512px;

	.vd-page {
		align-items: center;
		flex-direction: column;
		max-width: 100%;
	}

	.vd-page-card {
		width: $vd-page-width;

		// Override default shadow to fix it in IE
		box-shadow:
			-1px 3px 5px -2px rgba(0, 0, 0, .1),
			0 5px 4px 0 rgba(0, 0, 0, .1),
			0 1px 3px 0 rgba(0, 0, 0, .1),
			0 -1px 10px 0 rgba(0, 0, 0, .1);

		&.vd-no-shadow {
			box-shadow: none;
		}

		&.vd-min-height {
			min-height: $min-height;
		}
	}
</style>
