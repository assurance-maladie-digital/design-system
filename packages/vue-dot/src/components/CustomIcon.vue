<template>
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
		<slot>
			<div
				v-for="iconTheme in themeIcons"
				:key="iconTheme.name"
				v-html="iconTheme.svg"
			/>
		</slot>
	</span>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Icon } from '../../types';

	const Props = Vue.extend({
		props: {
			color: {
				type: String,
				default: 'currentColor'
			},
			icon: {
				type: String,
				default: undefined
			},
			large: {
				type: Boolean,
				default: false
			},
			medium: {
				type: Boolean,
				default: false
			},
			size: {
				type: String,
				default: ''
			},
			small: {
				type: Boolean,
				default: false
			},
			xLarge: {
				type: Boolean,
				default: false
			}
		}
	});

	@Component
	export default class CustomIcon extends Props {
		get themeIcons(): Icon[] {
			// If there is icons in theme
			if (this.$theme && this.$theme.config && this.$theme.config.icons) {
				const filtered = this.$theme.config.icons.filter((icon: Icon) => {
					return this.icon === icon.name;
				});

				return filtered;
			}

			return [];
		}
	}
</script>

<style lang="scss">
	$default: 1.35em;
	$small: 1em;
	$medium: 1.5em;
	$large: 1.85em;
	$xLarge: 2.25em;

	.vd-custom-icon {
		width: $default;
		height: $default;
		position: relative;
		display: inline-block;
		vertical-align: middle;

		svg {
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			position: absolute;
			transition: fill .25s;
		}

		&.vd-custom-color svg {
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
