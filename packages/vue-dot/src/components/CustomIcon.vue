<template>
	<!--
		`aria-hidden` is present, this hides the icon
		from screen-readers, an accessibile label should be
		provided by the context/the user
	-->
	<span
		:class="{
			'vd-large': large,
			'vd-medium': medium,
			'vd-small': small,
			'vd-x-large': xLarge,
			'vd-custom-color': color
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
				v-html="themeIcon.svg"
			/>
		</slot>
	</span>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Icon, Theme } from '../../types';

	const Props = Vue.extend({
		props: {
			// Color, default is inherited from CSS color
			color: {
				type: String,
				default: 'currentColor'
			},
			// The icon from the theme,
			// optionnal when using the slot instead of theme icon
			icon: {
				type: String,
				default: undefined
			},
			// Size properties
			large: {
				type: Boolean,
				default: false
			},
			medium: {
				type: Boolean,
				default: false
			},
			small: {
				type: Boolean,
				default: false
			},
			xLarge: {
				type: Boolean,
				default: false
			},
			// Custom size
			size: {
				type: String,
				default: undefined
			}
		}
	});

	/**
	 * CustomIcon is a component that displays an SVG Icon
	 * defined in the theme that is passed as an option of the plugin
	 */
	@Component
	export default class CustomIcon extends Props {
		$theme!: Theme;

		get themeIcon(): Icon | undefined {
			// If there are icons in the theme
			if (this.$theme && this.$theme.config && this.$theme.config.icons) {
				// Find the icon with the name passed in the prop
				const filtered = this.$theme.config.icons.find((icon: Icon) => {
					return this.icon === icon.name;
				});

				// If the icon isn't find, it will return undefined
				return filtered;
			}

			return undefined;
		}
	}
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
		// the child will be positionned absolutely
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
			transition: fill .25s;
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
