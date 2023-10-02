<template>
	<div
		:class="{ 'vd-form-input': !inline }"
		class="vd-select-btn-field"
	>
		<VBtnToggle
			v-bind="options.btnToggle"
			:value="internalValue"
			:multiple="multiple"
			:class="{ 'flex-column': !inline }"
			:aria-label="label"
			role="listbox"
			class="vd-select-btn-field-toggle d-flex overflow-y-auto primary--text"
		>
			<VBtn
				v-for="(item, index) in filteredItems"
				v-bind="options.btn"
				:key="index"
				:value="item.value"
				:outlined="!isSelected(item.value)"
				:elevation="0"
				:color="error ? 'error' : 'primary'"
				:class="{ 'error--text': error }"
				:aria-selected="isSelected(item.value)"
				role="option"
				@click="toggleItem(item)"
			>
				<span class="text-body-1">
					{{ item.text }}
				</span>

				<VSpacer v-bind="options.spacer" />

				<VIcon
					v-bind="options.icon"
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
				:class="$vuetify.theme.dark ? 'theme--dark' : 'theme--light'"
				class="v-messages error--text px-3 mt-2 mb-0"
			>
				{{ errorMessage }}
			</p>
		</template>

		<p
			v-else-if="hint"
			:class="$vuetify.theme.dark ? 'theme--dark' : 'theme--light'"
			class="v-messages px-3 mt-2 mb-0"
		>
			{{ hint }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { customizable } from '../../mixins/customizable';

	import { config } from './config';
	import { SelectBtnValue, SelectBtnItem } from './types';

	import { mdiCheck } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			value: {
				type: [Number, String, Array] as PropType<SelectBtnValue>,
				default: null
			},
			items: {
				type: Array as PropType<SelectBtnItem[]>,
				default: () => []
			},
			label: {
				type: String,
				default: undefined
			},
			multiple: {
				type: Boolean,
				default: false
			},
			inline: {
				type: Boolean,
				default: false
			},
			hint: {
				type: String,
				default: undefined
			},
			error: {
				type: Boolean,
				default: false
			},
			errorMessages: {
				type: Array as PropType<string[]>,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component<SelectBtnField>({
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			value: {
				handler(value: SelectBtnValue): void {
					if (value === null && this.multiple) {
						this.internalValue = [];

						return;
					}

					this.internalValue = value;
				},
				immediate: true
			}
		}
	})
	export default class SelectBtnField extends MixinsDeclaration {
		checkIcon = mdiCheck;

		internalValue: SelectBtnValue = null;

		get filteredItems(): SelectBtnItem[] {
			return this.items.filter((item) => {
				return item.value !== null && item.value !== undefined;
			});
		}

		isSelected(value: number | string): boolean {
			if (this.internalValue === null) {
				return false;
			}

			if (this.multiple) {
				const typedValue = this.internalValue as unknown[];

				return typedValue.includes(value);
			}

			return this.internalValue === value;
		}

		getIconStyles(item: SelectBtnItem): Record<string, string> {
			return {
				visibility: this.isSelected(item.value) ? 'visible' : 'hidden'
			};
		}

		getNewValue(item: SelectBtnItem): SelectBtnValue {
			if (this.multiple) {
				if (this.internalValue === null) {
					return null;
				}

				const typedValue = this.internalValue as unknown[];

				const hasUniqueItemSelected = this.filteredItems.find((item) => {
					return item.unique && typedValue.includes(item.value);
				});

				if (item.unique || hasUniqueItemSelected) {
					return [item.value];
				}

				const index = typedValue.indexOf(item.value);

				if (index === -1) {
					return [
						...typedValue,
						item.value
					];
				}

				return typedValue.filter((value) => {
					return value !== item.value;
				});
			}

			if (this.internalValue === item.value) {
				return null;
			}

			return item.value;
		}

		toggleItem(item: SelectBtnItem): void {
			const newValue = this.getNewValue(item);

			this.internalValue = newValue;

			this.$emit('update:error', false);
			this.$emit('update:error-messages', undefined);

			this.$emit('change', this.internalValue);
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.vd-select-btn-field-toggle {
		background: none !important;

		&.flex-column .v-btn {
			border-radius: 4px !important;
			border-width: 1px !important;

			+ .v-btn {
				margin-top: 8px;
			}
		}

		.v-btn {
			background: #fff;

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

			&.error--text {
				border-color: $vd-error !important;
			}
		}
	}
</style>
