<script lang="ts">
import {defineComponent} from "vue";
import {config} from "./config";
import {locales} from "./locales";
import type {Refs} from "@/types";
import {customizable} from "@/mixins/customizable";
import {exactLength} from "@/rules/exactLength";
import {requiredFn} from '@/rules/required';
import {vMaska} from "maska";
import {mdiInformationOutline} from "@mdi/js";
import deepMerge from "deepmerge";
import {ValidationRule} from "@/rules/types";

const NUMBER_LENGTH = 13;
const KEY_LENGTH = 2;

const SINGLE_FIELD = NUMBER_LENGTH;
const DOUBLE_FIELD = NUMBER_LENGTH + KEY_LENGTH;

export default defineComponent({
	inheritAttrs: false,
	mixins: [customizable(config)],
	directives: {maska: vMaska},
	emits: ["update:modelValue"],
	props: {
		modelValue: {
			type: String,
			default: null
		},
		nirLength: {
			type: Number,
			default: DOUBLE_FIELD,
			validator(value: number): boolean {
				return [SINGLE_FIELD, DOUBLE_FIELD].includes(value);
			}
		},
		required: {
			type: Boolean,
			default: false
		},
		outlined: {
			type: Boolean,
			default: false
		},
		tooltip: {
			type: String,
			default: undefined
		}
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
				masked: "",
				unmasked: "",
				completed: false
			},

			numberValue: '',
			keyValue: '',

			numberMask: {
				mask: "# ## ## #C ### ###",
				preProcess: (value: string) => value.toUpperCase(),
				tokens: {
					C: {
						pattern: /[0-9AB]/,
						transform: (char: string) => char.toUpperCase(),
					},
				},
			},
			keyMask: {mask: "##"},

			numberErrors: [] as string[],
			keyErrors: [] as string[],
			isSingleField: false,
			isInputFocused: false,
		};
	},
	watch: {
		keyValue(newVal: string) {
			this.$emit("update:modelValue", this.maskaNumberValue.unmasked + newVal);
		},
		modelValue: {
			immediate: true,
			handler(newValue) {
				if (!newValue) {
					return;
				}
				if (newValue.length >= NUMBER_LENGTH) {
					this.numberValue = newValue.slice(0, NUMBER_LENGTH);
					this.keyValue = newValue.slice(NUMBER_LENGTH);
				}
				if (newValue.length === NUMBER_LENGTH + KEY_LENGTH || !this.isSingleField) {
					this.validateKeyValue();
				}
			}
		}
	},
	created(): void {
		this.isSingleField = this.nirLength === SINGLE_FIELD;
	},
	mounted(): void {
		const textField = this.$refs.numberField as any;
		const keyField = this.$refs.keyField as any;
		if (textField.hint === '13 caractères' || keyField?.hint === '2 chiffres') {
			// add a class to hint
			textField.$el.querySelector('.v-messages__message').classList.add('vd-nir-field__hint');
			keyField?.$el.querySelector('.v-messages__message').classList.add('vd-nir-field__hint');
		}
	},
	computed: {
		numberFilled(): boolean {
			return this.maskaNumberValue.unmasked?.length === NUMBER_LENGTH;
		},

		keyFilled(): boolean {
			return this.keyValue?.length === KEY_LENGTH;
		},

		/**
		 * Generate the validation rules for the number field
		 */
		numberRules(): ValidationRule[] {
			let rules = [
				exactLength(NUMBER_LENGTH, true, {default: locales.errorLengthNumber})
			];

			if (this.required) {
				rules.push(requiredFn({default: locales.errorRequiredNumber}));
			}

			return rules;
		},

		/**
		 * Generate the validation rules for the key field
		 */
		keyRules(): ValidationRule[] {
			let rules = [
				exactLength(KEY_LENGTH, true, {default: locales.errorLengthKey})
			];

			if (this.required) {
				rules.push(requiredFn({default: locales.errorRequiredKey}));
			}

			return rules;
		},

		textFieldOptions() {
			return deepMerge(config, this.$attrs);
		},

		errors(): string | never[] {
			return [...this.numberErrors, ...this.keyErrors].join('\n');
		},

		internalValue(): string | null {
			if (this.isSingleField && this.numberFilled) {
				return this.maskaNumberValue.unmasked;
			}

			if (!this.numberFilled || !this.keyFilled) {
				return null;
			}

			return this.maskaNumberValue.unmasked + this.keyValue as string;
		}
	},
	methods: {
		changeNumberValue(): void {
			this.$emit("update:modelValue", this.keyValue ? this.maskaNumberValue.unmasked + this.keyValue : this.maskaNumberValue.unmasked);
		},

		changeKeyValue(): void {
			if (!this.internalValue || this.errors.length > 0) {
				return;
			}

			this.$emit("update:modelValue", this.keyValue ? this.maskaNumberValue.unmasked + this.keyValue : this.keyValue);
		},

		/**
		 * Execute the validation rules for the number field
		 */
		validateNumberValue(): void {
			this.isInputFocused = !this.isInputFocused;
			this.numberErrors =
				this.numberRules
					.map(rule => rule(this.maskaNumberValue.unmasked))
					.filter((error): error is string => typeof error === 'string');
			//this.$emit('update:modelValue', this.maskaNumberValue.unmasked);
		},

		/**
		 * Execute the validation rules for the key field
		 */
		validateKeyValue(): void {
			this.keyErrors =
				this.keyRules
					.map(rule => rule(this.keyValue))
					.filter((error): error is string => typeof error === 'string');
		},

		focusKeyField({
						  key,
						  altKey,
						  ctrlKey,
						  metaKey,
						  shiftKey,
					  }: KeyboardEvent): void {
			const isSingleField = this.isSingleField;
			const notFilled = !this.numberFilled;
			// Don't move focus for combo (eg. Ctrl + A)
			const keyHasModifier = altKey || ctrlKey || metaKey || shiftKey;
			// Don't move focus for other keys (eg. ArrowRight)
			const isNotSingleAlphaNumChar = !/^[a-zA-Z0-9| ]$/.test(key);
			// Don't move focus is content is selected to allow overwrite
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
			if (this.keyValue?.length !== 0) {
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
			:max-errors="5"
			:error-messages="errors"
			class="vd-nir-field__fields-wrapper multi-line"
		>
			<VTextField
				ref="numberField"
				v-maska:[numberMask]="maskaNumberValue"
				v-model="numberValue"
				v-bind="textFieldOptions"
				:variant="outlined ? 'outlined' : 'underlined'"
				:label="locales.numberLabel"
				:hint="locales.numberHint"
				persistent-hint
				:hide-details="false"
				:color="numberFilled ? 'success' : 'primary'"
				:base-color="numberFilled ? 'success' : ''"
				:error="numberErrors.length > 0"
				:aria-invalid="numberErrors.length > 0"
				:aria-errormessage="numberErrors.length > 0 ? 'number-field-errors' : undefined"
				class="vd-number-field flex-grow-0 mr-2 mr-sm-4"
				@keydown="focusKeyField"
				@maska="changeNumberValue"
				@blur="validateNumberValue"
				@focus="isInputFocused = true"
			/>

			<div
				id="number-field-errors"
				class="d-sr-only"
			>
				{{ numberErrors.join(' ') }}
			</div>

			<template v-if="!isSingleField">
				<VTextField
					ref="keyField"
					v-maska:[keyMask]
					v-model="keyValue"
					v-bind="textFieldOptions"
					:variant="outlined ? 'outlined' : 'underlined'"
					:label="locales.keyLabel"
					:hint="locales.keyHint"
					persistent-hint
					:hide-details="false"
					:color="keyFilled ? 'success' : 'primary'"
					:base-color="keyFilled ? 'success' : ''"
					:error="keyErrors.length > 0"
					:aria-invalid="keyErrors.length > 0"
					:aria-errormessage="keyErrors.length > 0 ? 'key-field-errors' : undefined"
					class="vd-key-field flex-grow-0 mr-2 mr-sm-4"
					@keyup.delete="focusNumberField"
					@maska="changeKeyValue"
					@blur="validateKeyValue"
				/>
				<div
					id="key-field-errors"
					class="d-sr-only"
				>
					{{ keyErrors.join(' ') }}
				</div>
			</template>

			<VTooltip
				v-if="tooltip"
				v-bind="options.tooltip"
			>
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

:deep(.vd-nir-field__hint) {
	color: rgba(0, 0, 0, 1) !important;
}

.vd-number-field {
	width: 296px;
}

.vd-key-field {
	width: 84px;
}

// Don't allow resize for these elements
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

// Fix input spacing
:deep(.v-input__append) {
	margin-inline-start: 0 !important;
}

:deep(.v-text-field .v-input__details) {
	padding-inline-start: 0 !important;
	padding-inline-end: 0 !important;
}

@mixin responsive-nir-wrapper {
	.vd-nir-field__fields-wrapper :deep( > .v-input__control) {
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

/* fallback for IE11 */
@media screen and (max-width: 360px) {
	@include responsive-nir-wrapper;
}
</style>
