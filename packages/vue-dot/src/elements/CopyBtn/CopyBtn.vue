<template>
	<div>
		<VBtn
			v-bind="options.btn"
			:aria-label="label"
			@click="copy"
		>
			<slot name="icon">
				<VIcon>
					{{ copyIcon }}
				</VIcon>
			</slot>
		</VBtn>

		<!--
			The tooltip
			We don't use the activator slot
			because of problem with events
		-->
		<VTooltip
			v-if="showTooltip"
			v-model="tooltip"
			v-bind="options.tooltip"
			activator=".copy-tooltip-activator"
		>
			<slot name="tooltip">
				{{ locales.tooltip }}
			</slot>
		</VTooltip>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import config from './config';
	import locales from './locales';

	import customizable, { Options } from '../../mixins/customizable';

	import copyToClipboard from '../../functions/copyToClipboard';

	import { mdiContentCopy } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			/**
			 * The accessible label of the button
			 * required because if not present, the button
			 * will not be properly accessible to screen readers
			 */
			label: {
				type: String,
				required: true
			},
			/** The text that will be copied to the clipboard */
			textToCopy: {
				type: String,
				required: true
			},
			/** Show or hide the tooltip, default is show (true) */
			showTooltip: {
				type: Boolean,
				default: true
			},
			/** The number of milliseconds before the tooltip closes */
			tooltipDuration: {
				type: Number,
				default: 2500
			}
		}
	});

	/**
	 * CopyBtn is a component that copy text to the clipboard and
	 * shows a tooltip
	 */
	@Component({
		mixins: [
			// Default configuration
			customizable(config)
		]
	})
	export default class Copy extends Props {
		// Mixin computed data
		options!: Options;

		// Icon
		copyIcon = mdiContentCopy;

		// Locales
		locales = locales;

		/** Tooltip v-model */
		tooltip = false;

		/**
		 * Show the tooltip then hide it after
		 * tooltipDuration delay
		 */
		activateTooltip() {
			this.tooltip = true;

			setTimeout(() => {
				this.tooltip = false;
			}, this.tooltipDuration);
		}

		/** When the copy button is clicked */
		copy() {
			// Copy the text to the clipboard
			copyToClipboard(this.textToCopy);

			// Activate the tooltip if wanted
			if (this.showTooltip) {
				this.activateTooltip();
			}
		}
	}
</script>
