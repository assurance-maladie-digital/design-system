<template>
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
		:aria-hidden="!label"
		:aria-label="label"
		role="img"
		focusable="false"
		class="vd-custom-icon"
	>
		<slot>
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
			 * The color of the icon (any CSS value)
			 * By default it's inherited from the text color
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
			 * The CSS size of the icon (width/height)
			 * By default, the size is 1.35em (between small & medium)
			 */
			size: {
				type: String,
				default: undefined
			},
			/**
			 * The accessible label of the icon
			 * By default, the icon is hidden from screen readers
			 */
			label: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props, ThemeIcon);

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

			// Transition when color is updated
			transition: fill .15s;
		}

		&.vd-custom-color svg {
			// Use color from parent,
			// this makes the icon the color of the prop
			fill: currentColor;
		}

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
