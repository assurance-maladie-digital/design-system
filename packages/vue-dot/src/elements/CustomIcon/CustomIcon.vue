<template>
	<!--
		`aria-hidden` is present, this hides the icon
		from screen-readers, an accessible label should be
		provided by the context/the user
	-->
	<span
		:class="{
			'vd-small': small,
			'vd-medium': medium,
			'vd-large': large,
			'vd-x-large': xLarge,
			'vd-custom-color': Boolean(color)
		}"
		:style="{
			color,
			width: size,
			height: size
		}"
		class="vd-custom-icon"
		aria-hidden="true"
	>
		<!--
			Default slot, this makes the content
			of the icon totally customizable
		-->
		<slot>
			<!-- v-html is needed to render the SVG -->
			<span
				v-if="themeIcon"
				v-html="themeIcon"
			/>
		</slot>
	</span>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { ThemeIcon } from './mixins/themeIcon';

	const Props = Vue.extend({
		props: {
			/**
			 * Change the color of the icon (any CSS value)
			 * By default it's inherited from CSS color property
			 */
			color: {
				type: String,
				default: 'currentColor'
			},
			/** Make the icon small (1em) */
			small: {
				type: Boolean,
				default: false
			},
			/** Make the icon medium (1.5em) */
			medium: {
				type: Boolean,
				default: false
			},
			/** Make the icon large (1.85em) */
			large: {
				type: Boolean,
				default: false
			},
			/** Make the icon extra large (2.25em) */
			xLarge: {
				type: Boolean,
				default: false
			},
			/**
			 * Apply a custom CSS size (width/height) to the icon
			 * By default, the size is 1.35em (between small & medium)
			 */
			size: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props, ThemeIcon);

	/**
	 * CustomIcon is a component that displays an SVG Icon
	 * defined in the theme that is passed as an option of the plugin
	 */
	@Component
	export default class CustomIcon extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	$default: 1.35em;
	$small: 1em;
	$medium: 1.5em;
	$large: 1.85em;
	$xLarge: 2.25em;

	.vd-custom-icon {
		// Icon dimensions
		width: $default;
		height: $default;

		display: inline-block;
		vertical-align: middle;

		// Position relative the container since
		// the child will be positioned absolutely
		position: relative;

		::v-deep svg {
			// Make the SVG element take all space
			// in the parent, with position absolute
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			position: absolute;

			// Transition when color is updating
			transition: fill .15s;
		}

		&.vd-custom-color svg {
			// Use color from parent,
			// this makes the icon the color of the prop
			fill: currentColor;
		}

		// Sizes
		&.vd-small {
			width: $small;
			height: $small;
		}

		&.vd-medium {
			width: $medium;
			height: $medium;
		}

		&.vd-large {
			width: $large;
			height: $large;
		}

		&.vd-x-large {
			width: $xLarge;
			height: $xLarge;
		}
	}
</style>
