<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { customizable } from '@/mixins/customizable';
import { config } from './config';
import type { SelectBtnValue, SelectBtnItem } from './types';
import { mdiCheck } from '@mdi/js';
import { useTheme } from 'vuetify';

export default defineComponent({
	mixins: [customizable(config)],
	props: {
		modelValue: {
			type: [Number, String, Array] as PropType<SelectBtnValue>,
			default: null,
		},
		items: {
			type: Array as PropType<SelectBtnItem[]>,
			default: () => [],
		},
		label: {
			type: String,
			default: undefined,
		},
		multiple: {
			type: Boolean,
			default: false,
		},
		inline: {
			type: Boolean,
			default: false,
		},
		hint: {
			type: String,
			default: undefined,
		},
		error: {
			type: Boolean,
			default: false,
		},
		errorMessages: {
			type: Array as PropType<string[]>,
			default: undefined,
		},
		readonly: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		modelValue: {
			handler(value: SelectBtnValue): void {
				if (value === null && this.multiple) {
					this.internalValue = [];

					return;
				}

				this.internalValue = value;
			},
			immediate: true,
			deep: true,
		},
	},
	emits: ['update:modelValue', 'update:error', 'update:error-messages'],
	data() {
		return {
			checkIcon: mdiCheck,
			internalValue: null as SelectBtnValue,
			darktheme: useTheme().current.value.dark as boolean,
		};
	},
	computed: {
		filteredItems(): SelectBtnItem[] {
			return this.items.filter((item) => {
				return item.value !== null && item.value !== undefined;
			});
		},
	},
	methods: {
		isSelected(value: number | string): boolean {
			if (this.multiple) {
				return Array.isArray(this.internalValue) && this.internalValue.includes(value);
			}
			return this.internalValue === value;
		},

		getIconStyles(item: SelectBtnItem): Record<string, string> {
			return {
				visibility: this.isSelected(item.value) ? 'visible' : 'hidden',
			};
		},

		getNewValue(item: SelectBtnItem): SelectBtnValue {
			if (this.multiple) {
				const typedValue = this.internalValue as Array<string | number>;

				// If the item is unique, remove all other items from the array
				const hasUniqueItemSelected = this.filteredItems.some(
					(filteredItem) => filteredItem.unique && typedValue.includes(filteredItem.value)
				);

				if (item.unique || hasUniqueItemSelected) {
					return [item.value];
				}

				// If the item is not already selected, add it to the array
				if (!typedValue.includes(item.value)) {
					return [...typedValue, item.value];
				}

				// If the item is already selected, remove it from the array
				return typedValue.filter((value) => value !== item.value);
			}

			// If the item is already selected, deselect it
			if (this.internalValue === item.value) {
				return null;
			}

			// Select the item
			return item.value;
	},

		toggleItem(item: SelectBtnItem): void {
			this.internalValue = this.getNewValue(item);

			this.$emit('update:error', false);
			this.$emit('update:error-messages', undefined);
			this.$emit('update:modelValue', this.internalValue);
		},
	},
});
</script>

<template>
	<div :class="{ 'vd-form-input': !inline }" class="vd-select-btn-field">
		<VBtnToggle
			v-bind="options.btnToggle"
			:model-value="internalValue"
			:multiple="multiple"
			:class="{ 'flex-column': !inline }"
			:aria-label="label"
			role="listbox"
			class="vd-select-btn-field-toggle d-flex flex-wrap text-primary"
		>
			<VBtn
				v-for="(item, index) in filteredItems"
				v-bind="options.btn"
				:key="index"
				:value="item.value"
				:disabled="readonly"
				:variant="isSelected(item.value) ? 'flat' : 'outlined'"
				:elevation="0"
				:color="error ? 'error' : 'primary'"
				:class="{
					'text-error': error && !isSelected(item.value),
					'justify-start': !isSelected(item.value),
					'justify-space-between': isSelected(item.value),
				}"
				:aria-selected="isSelected(item.value)"
				role="option"
				@click="toggleItem(item)"
			>
				<span class="text-body-1">
					{{ item.text }}
				</span>

				<VIcon
					v-bind="options.icon"
					v-if="isSelected(item.value) || inline"
					:style="getIconStyles(item)"
				>
					{{ checkIcon }}
				</VIcon>
			</VBtn>
		</VBtnToggle>

		<template v-if="errorMessages">
			<p
				v-for="(errorMessage, index) in errorMessages"
				:key="index"
				:class="darktheme ? 'theme--dark' : 'theme--light'"
				class="v-messages text-error px-3 mt-2 mb-0"
			>
				{{ errorMessage }}
			</p>
		</template>

		<p
			v-else-if="hint"
			:class="darktheme ? 'theme--dark' : 'theme--light'"
			class="v-messages px-3 mt-2 mb-0"
		>
			{{ hint }}
		</p>
	</div>
</template>

<style lang="scss" scoped>
@import "@cnamts/design-tokens/dist/tokens";

.vd-select-btn-field-toggle {
	background: none !important;

	&.flex-column .v-btn {
		border-radius: 4px !important;

		+ .v-btn {
			margin-top: 8px;
		}
	}

	.v-btn {
		background: #fff;
		border-width: 1px !important;

		&.v-btn--active::before {
			opacity: 0 !important;
		}

		:deep(.v-btn__content) {
			flex-shrink: 1 !important;
		}
	}

	&.theme--dark {
		.v-btn {
			background: #1e1e1e;
		}
	}

	&:not(.v-btn-toggle--group) .v-btn.v-btn {
		border-color: $vd-primary !important;

		&.text-error {
			border-color: $vd-error !important;
		}
	}

	// Disable the fade effect when the button is disabled
	:deep(.v-btn--disabled) {
		opacity: 1;
	}

	:deep(.v-btn--disabled.v-btn--variant-flat .v-btn__overlay) {
		opacity: 0;
	}
}
</style>
