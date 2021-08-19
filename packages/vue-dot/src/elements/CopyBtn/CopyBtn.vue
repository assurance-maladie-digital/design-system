<template>
	<div class="vd-copy-btn">
		<VMenu
			v-model="tooltip"
			v-bind="options.menu"
			:disabled="hideTooltip"
		>
			<template #activator="{ on }">
				<VBtn
					data-cy="VBtn"
					v-bind="options.btn"
					:aria-label="label"
					v-on="on"
					@click="copy"
				>
					<slot name="icon">
						<VIcon v-bind="options.icon">
							{{ copyIcon }}
						</VIcon>
					</slot>
				</VBtn>
			</template>

			<slot name="tooltip">
				{{ locales.tooltip }}
			</slot>
		</VMenu>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import { copyToClipboard } from '../../functions/copyToClipboard';

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
			/**
			 * The text that will be copied to the clipboard,
			 * or a function that will return it
			 */
			textToCopy: {
				type: [Function, String] as PropType<() => string | string>,
				required: true
			},
			/** Hide the tooltip */
			hideTooltip: {
				type: Boolean,
				default: false
			},
			/** Tooltip display time in milliseconds */
			tooltipDuration: {
				type: Number,
				default: 2500
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * CopyBtn is a component that copy text to the clipboard and
	 * shows a tooltip
	 */
	@Component
	export default class CopyBtn extends MixinsDeclaration {
		// Locales
		locales = locales;

		// Icon
		copyIcon = mdiContentCopy;

		/** Tooltip v-model */
		tooltip = false;

		/** When the copy button is clicked */
		copy(): void {
			let toCopy: string;

			// Get text to copy
			if (typeof this.textToCopy === 'function') {
				toCopy = this.textToCopy();
			} else {
				toCopy = this.textToCopy;
			}

			// Copy the text to the clipboard
			copyToClipboard(toCopy);

			if (!this.hideTooltip) {
				// Hide tooltip after tooltipDuration delay
				setTimeout(() => {
					this.tooltip = false;
				}, this.tooltipDuration);
			}
		}
	}
</script>
