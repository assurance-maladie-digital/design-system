<script lang="ts">
	import { defineComponent } from 'vue'
	import type { PropType } from 'vue'
	import { mdiContentCopy } from '@mdi/js'

	import { customizable } from '@/mixins/customizable'
	import { copyToClipboard } from '@/functions/copyToClipboard'

	import { config } from './config'
	import { locales } from './locales'

	export default defineComponent({
		mixins: [customizable(config)],
		props: {
			label: {
				type: String,
				required: true
			},
			textToCopy: {
				type: [Function, String] as unknown as PropType<(() => string) | string>,
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
		},
		data() {
			return {
				tooltip: false,
				copyIcon: mdiContentCopy,
				locales
			}
		},
		methods: {
			copy(): void {
				const contentToCopy = typeof this.textToCopy === 'function' ? this.textToCopy() : this.textToCopy

				copyToClipboard(contentToCopy)

				if (this.hideTooltip) {
					return
				}

				setTimeout(() => {
					this.tooltip = false
				}, this.tooltipDuration)
			}
		}
	})
</script>

<template>
	<div class="vd-copy-btn">
		<VMenu
			v-model="tooltip"
			v-bind="options.menu"
			:disabled="hideTooltip"
			transition="fade-transition"
		>
			<template #activator="{ props }">
				<VBtn
					v-bind="{
						...props,
						...options.btn
					}"
					:aria-label="label"
					data-test-id="copy-btn"
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

<style lang="scss">
	// Make the tooltip menu look like a tooltip
	.vd-copy-tooltip-menu {
		padding: 6px 16px;
		box-shadow: none;
		margin-top: 2px;
		background: rgba(97, 97, 97, 0.9);
		color: white;
	}
</style>
