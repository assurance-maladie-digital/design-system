// packages/synapse-bridge/src/patterns/NirField/NirField.vue

<script lang="ts">
import { defineComponent } from 'vue';
import { config } from './config';
import { locales } from './locales';
import type { Refs } from '@/types';
import { customizable } from '@/mixins/customizable';
import { vMaska } from 'maska';
import { mdiInformationOutline } from '@mdi/js';
import deepMerge from 'deepmerge';
import type { ValidationRule } from '@/rules/types';
import { NUMBER_LENGTH, KEY_LENGTH, checkNIR, isNIRKeyValid } from './nirValidations';

const SINGLE_FIELD = NUMBER_LENGTH;
const DOUBLE_FIELD = NUMBER_LENGTH + KEY_LENGTH;

export default defineComponent({
	inheritAttrs: false,
	mixins: [customizable(config)],
	directives: { maska: vMaska },
	emits: ['update:modelValue'],
	props: {
		modelValue: {
			type: String,
			default: null,
		},
		nirLength: {
			type: Number,
			default: DOUBLE_FIELD,
			validator(value: number): boolean {
				return [SINGLE_FIELD, DOUBLE_FIELD].includes(value);
			},
		},
		required: {
			type: Boolean,
			default: false,
		},
		outlined: {
			type: Boolean,
			default: false,
		},
		tooltip: {
			type: String,
			default: undefined,
		},
		numberLabel: {
			type: String,
			default: locales.numberLabel,
		},
		keyLabel: {
			type: String,
			default: locales.keyLabel,
		},
	},
	data() {
		return {
			$refs: {} as Refs<{
				numberField: HTMLElement;
				keyField: HTMLElement;
			}>,

			locales,

			infoIcon: mdiInformationOutline,

			maskaNumberValue: {
				masked: '',
				unmasked: '',
				completed: false,
			},

			maskaKeyValue: {
				masked: '',
				unmasked: '',
				completed: false,
			},

			numberValue: '',
			keyValue: '',

			internallyUpdatedValue: null as string | null,

			numberMask: {
				mask: '# ## ## #C ### ###',
				preProcess: (value: string) => value.toUpperCase(),
				tokens: {
					C: {
						pattern: /[0-9AB]/,
						transform: (char: string) => char.toUpperCase(),
					},
				},
			},
			keyMask: { mask: '##' },

			numberErrors: [] as string[],
			keyErrors: [] as string[],
		};
	},
	watch: {
		modelValue: {
			immediate: true,
			handler(newValue) {
				if (newValue === null) {
					this.numberValue = '';
					this.keyValue = '';

					return;
				}

				if (this.internallyUpdatedValue === newValue) {
					this.internallyUpdatedValue = null;

					return;
				}

				this.numberValue = newValue.slice(0, NUMBER_LENGTH);
				this.keyValue = newValue.slice(NUMBER_LENGTH, DOUBLE_FIELD);

				this.validateNumberValue(this.numberValue);
				if (!this.isSingleField) {
					this.validateKeyValue(this.keyValue);
				}
			},
		},
	},
	computed: {
		isSingleField(): boolean {
			return this.nirLength === SINGLE_FIELD;
		},
		textFieldOptions() {
			return deepMerge(config, this.$attrs);
		},

		numberRules(): ValidationRule[] {
			return [
				(value: string | null) => {
					if (this.required && !value) {
						return this.locales.errorRequiredNumber;
					}
					return true;
				},
				(value: string | null) => {
					if (value && value.length !== NUMBER_LENGTH && value.length > 0) {
						return this.locales.errorLengthNumber(NUMBER_LENGTH);
					}
					return true;
				},
				(value: string | null) => {
					if (value && !checkNIR(value) && value.length > 0) {
						return this.locales.errorInvalidFormat;
					}
					return true;
				},
			];
		},

		keyRules(): ValidationRule[] {
			if (this.isSingleField) {
				return [];
			}
			return [
				(value: string | null) => {
					if (this.required && !value) {
						return this.locales.errorRequiredKey;
					}
					return true;
				},
				(value: string | null) => {
					if (value && value.length > 0 && value.length !== KEY_LENGTH) {
						return this.locales.errorLengthKey(KEY_LENGTH);
					}
					return true;
				},
				(value: string | null) => {
					if (value) {
						const fullNIR = this.numberValue + value;
						if (!isNIRKeyValid(fullNIR)) {
							return this.locales.errorInvalidKey;
						}
					}
					return true;
				},
			];
		},
		rules() {
			const numberRules = () => {
				this.validateNumberValue(this.maskaNumberValue.unmasked)
				return this.numberErrors.length === 0;

			};

			return this.isSingleField
				? [numberRules]
				: [
					numberRules,
					() => {
						this.validateKeyValue(this.maskaKeyValue.unmasked);

						return this.keyErrors.length === 0;
					},
				];
		},

		errors(): string[] | never[] {
			return [...this.numberErrors ?? null, ...this.keyErrors ?? null];
		},
	},
	methods: {
		changeNumberValue(): void {
			if (this.isSingleField) {
				this.internallyUpdatedValue = this.maskaNumberValue.unmasked;
				this.$emit('update:modelValue', this.maskaNumberValue.unmasked);

				return;
			}
			this.doubleFieldUpdated();
		},

		changeKeyValue(): void {
			this.doubleFieldUpdated();
		},

		doubleFieldUpdated(): void {
			const internalValue =
				this.maskaNumberValue.unmasked + this.maskaKeyValue.unmasked;

			this.internallyUpdatedValue = internalValue;
			this.$emit('update:modelValue', internalValue);
		},

		validateNumberValue(numberFieldValue: string): void {
			this.numberErrors = this.numberRules
				.map((rule) => {
					const result = rule(numberFieldValue);
					return result === true ? null : result;
				})
				.filter((error): error is string => error !== null);
		},

		validateKeyValue(keyFieldValue: string): void {
			this.keyErrors = this.keyRules
				.map((rule) => {
					const result = rule(keyFieldValue);
					return result === true ? null : result;
				})
				.filter((error): error is string => error !== null);
		},

		focusKeyField({
						  key,
						  altKey,
						  ctrlKey,
						  metaKey,
						  shiftKey,
					  }: KeyboardEvent): void {
			const isSingleField = this.isSingleField;
			const notFilled = !this.maskaNumberValue.completed;
			const keyHasModifier = altKey || ctrlKey || metaKey || shiftKey;
			const isNotSingleAlphaNumChar = !/^[a-zA-Z0-9| ]$/.test(key);
			const isContentSelected =
				this.$refs.numberField.selectionStart !==
				this.$refs.numberField.selectionEnd;

			const shouldNotFocus =
				isSingleField ||
				notFilled ||
				keyHasModifier ||
				isNotSingleAlphaNumChar ||
				isContentSelected;

			if (shouldNotFocus) {
				return;
			}

			this.$refs.keyField.focus();
		},

		focusNumberField(): void {
			if (this.maskaKeyValue.unmasked.length !== 0) {
				return;
			}

			this.$refs.numberField.focus();
		},
	},
});
</script>
<template>
	<div
		class="vd-nir-field d-flex align-start"
		:class="{ 'vd-nir-field--outlined': 'outlined' in $attrs }"
	>
		<VInput
			:model-value="[numberValue, keyValue]"
			:validation-value="[
        maskaNumberValue.unmasked,
        maskaKeyValue.unmasked,
      ]"
			validate-on="blur lazy"
			:error-messages="errors"
			:max-errors="5"
			:rules="rules"
			class="vd-nir-field__fields-wrapper multi-line"
		>
			<VTextField
				ref="numberField"
				v-maska:[numberMask]="maskaNumberValue"
				:model-value="numberValue"
				v-bind="textFieldOptions"
				:variant="outlined ? 'outlined' : 'underlined'"
				:label="numberLabel"
				:hint="locales.numberHint"
				persistent-hint
				hide-details
				:color="maskaNumberValue.completed ? 'success' : 'primary'"
				:base-color="maskaNumberValue.completed ? 'success' : ''"
				:error="numberErrors.length > 0"
				:aria-invalid="numberErrors.length > 0"
				:aria-errormessage="
          numberErrors.length > 0 ? 'number-field-errors' : undefined
        "
				class="vd-number-field flex-grow-0 mr-2 mr-sm-4"
				@keydown="focusKeyField"
				@maska="changeNumberValue"
				@blur="validateNumberValue(maskaNumberValue.unmasked)"
				@focus="
          () => {
            numberErrors = [];
          }
        "
			>
				<template #append-inner>
					<slot
						v-if="maskaNumberValue.completed"
						name="number-append-icon"
					/>
				</template>
			</VTextField>
			<div id="number-field-errors" class="d-sr-only">
				{{ numberErrors.join(' ') }}
			</div>
			<template v-if="!isSingleField">
				<VTextField
					ref="keyField"
					v-maska:[keyMask]="maskaKeyValue"
					:modelValue="keyValue"
					v-bind="textFieldOptions"
					:variant="outlined ? 'outlined' : 'underlined'"
					:label="keyLabel"
					:hint="locales.keyHint"
					persistent-hint
					hide-details
					:color="maskaKeyValue.completed ? 'success' : 'primary'"
					:base-color="maskaKeyValue.completed ? 'success' : ''"
					:error="keyErrors.length > 0"
					:aria-invalid="keyErrors.length > 0"
					:aria-errormessage="
            keyErrors.length > 0 ? 'key-field-errors' : undefined
          "
					class="vd-key-field flex-grow-0 mr-2 mr-sm-4"
					@keyup.delete="focusNumberField"
					@maska="changeKeyValue"
					@blur="validateKeyValue(maskaKeyValue.unmasked)"
					@focus="
            () => {
              keyErrors = [];
            }
          "
				>
					<template #append-inner>
						<slot
							v-if="maskaKeyValue.completed"
							name="key-append-icon"
						/>
					</template>
				</VTextField>
				<div id="key-field-errors" class="d-sr-only">
					{{ keyErrors.join(' ') }}
				</div>
			</template>

			<VTooltip v-if="tooltip" v-bind="options.tooltip">
				<template #activator="{ props }">
					<VIcon v-bind="props" class="vd-tooltip-icon mt-4 ml-2">
						{{ infoIcon }}
					</VIcon>
				</template>

				<slot name="tooltip">
					{{ tooltip }}
				</slot>
			</VTooltip>
		</VInput>
	</div>
</template>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

:deep(.v-field.v-field--active .v-label.v-field-label--floating) {
	opacity: 1;
}

.multi-line {
	white-space: pre-line !important;
}

.vd-number-field {
	width: 296px;
}

.vd-key-field {
	width: 84px;
}

.vd-nir-field :deep(.v-input__append-inner),
.vd-tooltip-icon {
	flex: none;
	color: rgba(0, 0, 0, 0.54);
}

.vd-key-field {
	flex: none;
}

.vd-nir-field--outlined :deep(.v-messages.error--text) {
	padding: 6px;
}

.vd-nir-field {
	container-name: nirFieldwrapper;
}

:deep(.v-input__append) {
	margin-inline-start: 0 !important;
}

:deep(.v-text-field .v-input__details) {
	padding-inline-start: 0 !important;
	padding-inline-end: 0 !important;
}

:deep(.v-text-field .v-input__details .v-messages) {
	color: rgba(0, 0, 0, 1) !important;
}

@mixin responsive-nir-wrapper {
	.vd-nir-field__fields-wrapper :deep(> .v-input__control) {
		justify-content: start;
		flex-wrap: wrap;
		gap: 4px;
		margin-bottom: 4px;

		.vd-number-field {
			flex: 100% 0 0;
		}
	}
}

@container nirFieldwrapper (max-width: 300px) {
	@include responsive-nir-wrapper;
}

@media screen and (max-width: 360px) {
	@include responsive-nir-wrapper;
}

.v-text-field .v-input__append-inner {
	padding-left: 0 !important;
}
:deep(
    .v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot
  ) {
	width: min-content !important;
}
</style>
