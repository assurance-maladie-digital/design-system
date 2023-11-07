<script lang="ts">
	import { defineComponent } from 'vue'

	import { config } from './config'
	import { locales } from './locales'

	import { customizable } from '@/mixins/customizable'

	import { useTheme } from 'vuetify'

	export default defineComponent({
		mixins: [customizable(config)],
		props: {
			label: {
				type: String,
				required: true,
			},
			value: {
				type: [String, Number],
				default: undefined,
			},
			action: {
				type: String,
				default: undefined,
			},
			placeholder: {
				type: String,
				default: locales.placeholder,
			},
			chip: {
				type: Boolean,
				default: false,
			},
			icon: {
				type: String,
				default: undefined,
			},
			row: {
				type: Boolean,
				default: false,
			},
			renderHtmlValue: {
				type: Boolean,
				default: false,
			},
		},
		computed: {
			labelColor(): string {
				const theme = useTheme()

				return theme.current.value.dark ? 'rgba(255, 255, 255, .7)' : 'rgba(0, 0, 0, .6)'
			},
			itemValue(): string {
				if (typeof this.value === 'number') {
					return isNaN(this.value) ? this.placeholder : this.value.toString()
				}

				return this.value || this.placeholder
			}
		}
	})
</script>

<template>
	<li class="vd-data-list-item d-flex flex-wrap">
		<slot name="icon">
			<VIcon
				v-if="icon"
				v-bind="options.icon"
			>
				{{ icon }}
			</VIcon>
		</slot>

		<div class="vd-data-list-item-content">
			<div :class="{ 'vd-row': row }">
				<div
					class="vd-data-list-item-label text-caption"
					:style="{ color: labelColor }"
				>
					{{ label }}
				</div>

				<div class="vd-data-list-item-value">
					<slot
						name="value"
						v-bind="{ itemValue }"
					>
						<VChip
							v-if="chip"
							v-bind="options.chip"
						>
							{{ itemValue }}
						</VChip>

						<span
							v-else-if="renderHtmlValue"
							class="text-body-1"
							v-html="itemValue"
						/>

						<span v-else class="text-body-1" v-text="itemValue" />
					</slot>
				</div>
			</div>

			<slot name="action">
				<VBtn
					v-if="action"
					v-bind="options.actionBtn"
					class="vd-data-list-item-action-btn"
					@click="$emit('click:action')"
				>
					{{ action }}
				</VBtn>
			</slot>
		</div>
	</li>
</template>

<style lang="scss" scoped>
	.vd-row {
		display: flex;
		flex-wrap: wrap;

		.vd-data-list-item-label {
			align-self: center;

			&::after {
				content: ":";
				margin: 0 4px;
			}
		}
	}

	.vd-data-list-item-action-btn.v-btn {
		min-width: 0;
		margin: 0 -1px;
	}

	.v-icon.v-theme--light {
		color: rgba(0, 0, 0, 0.54);
	}
</style>
