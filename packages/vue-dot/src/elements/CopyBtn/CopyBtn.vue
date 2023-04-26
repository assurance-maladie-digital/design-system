<template>
	<div class="vd-copy-btn">
		<VMenu
			v-model="tooltip"
			v-bind="options.menu"
			:disabled="hideTooltip"
		>
			<template #activator="{ on }">
				<VBtn
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
			label: {
				type: String,
				required: true
			},
			textToCopy: {
				type: [Function, String] as PropType<() => string | string>,
				required: true
			},
			hideTooltip: {
				type: Boolean,
				default: false
			},
			tooltipDuration: {
				type: Number,
				default: 2500
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class CopyBtn extends MixinsDeclaration {
		locales = locales;

		copyIcon = mdiContentCopy;

		tooltip = false;

		copy(): void {
			const contentToCopy = typeof this.textToCopy === 'function' ? this.textToCopy() : this.textToCopy;

			copyToClipboard(contentToCopy);

			if (this.hideTooltip) {
				return;
			}

			setTimeout(() => {
				this.tooltip = false;
			}, this.tooltipDuration);
		}
	}
</script>

<style lang="scss">
	// Make the tooltip menu look like a tooltip
	.vd-copy-tooltip-menu {
		padding: 6px 16px;
		box-shadow: none;
		margin-top: 2px;
		background: rgba(114,114,114,1);
	}
</style>
