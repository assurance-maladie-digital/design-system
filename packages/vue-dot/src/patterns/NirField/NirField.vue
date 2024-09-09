<template>
	<div
		:class="{
			'vd-nir-field--outlined': $attrs.hasOwnProperty('outlined'),
			'vd-nir-field--simple': isSingleField,
			'vd-nir-field--double': !isSingleField
		}"
		class="vd-nir-field"
	>
		<VInput
			:value="[computedNumberValue, keyValue]"
			:error-count="5"
			:rules="rules"
			:error-messages="errors"
			class="vd-nir-field__fields-wrapper"
		>
			<VTextField
				ref="numberField"
				v-facade="numberMask"
				v-bind="textFieldOptions"
				:value="computedNumberValue"
				:label="numberLabel"
				:hint="locales.numberHint"
				:success="numberFilled"
				:error="numberErrors.length > 0"
				:aria-invalid="numberErrors.length > 0"
				class="vd-number-field flex-grow-0 mr-2 mr-sm-4"
				@keydown="focusKeyField"
				@input.native="setNumberValue"
				@change="triggerNumberValidation"
				@blur="triggerNumberValidation"
			/>

			<template v-if="!isSingleField">
				<VTextField
					ref="keyField"
					v-facade="keyMask"
					v-bind="textFieldOptions"
					:value="keyValue"
					:label="keyLabel"
					:hint="locales.keyHint"
					:success="keyFilled"
					:error="keyErrors.length > 0"
					:aria-invalid="keyErrors.length > 0"
					class="vd-key-field flex-grow-0"
					@keyup.delete="focusNumberField"
					@input.native="setKeyValue"
					@change="triggerKeyValidation"
					@blur="triggerKeyValidation"
				/>
			</template>

			<VTooltip
				v-if="tooltip"
				v-bind="options.tooltip"
				class="vd-tooltip"
			>
				<template #activator="{ on, attrs }">
					<VIcon
						v-bind="attrs"
						class="vd-tooltip-icon mt-4 ml-2"
						v-on="on"
					>
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

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';
	import { InputFacadeEvent, Refs } from '../../types';

	import { customizable, Options } from '../../mixins/customizable';

	import { requiredFn } from '../../rules/required';
	import { exactLength } from '../../rules/exactLength';
	import { ValidationRule } from '../../rules/types';

	import { formatNir } from '../../functions/formatNir';

	import { mdiCheck, mdiInformationOutline } from '@mdi/js';

	import deepMerge from 'deepmerge';

	enum FieldTypesEnum {
		SINGLE = 13,
		DOUBLE = 15
	}

	const NUMBER_LENGTH = 13;
	const KEY_LENGTH = 2;

	const Props = Vue.extend({
		props: {
			value: {
				type: String,
				default: null
			},
			nirLength: {
				type: Number as PropType<FieldTypesEnum>,
				default: FieldTypesEnum.DOUBLE,
				validator(value): boolean {
					return value === FieldTypesEnum.SINGLE || value === FieldTypesEnum.DOUBLE;
				}
			},
			required: {
				type: Boolean,
				default: false
			},
			tooltip: {
				type: String,
				default: undefined
			},
			numberLabel: {
				type: String,
				default: locales.numberLabel
			},
			keyLabel: {
				type: String,
				default: locales.keyLabel
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component<NirField>({
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'input'
		},
		watch: {
			value: {
				handler(value: string | null, oldValue?: string) {
					if (value === this.internalValue) {
						// prevent unnecessary computes and ths key override
						return;
					}

					if (this.nirLength === FieldTypesEnum.SINGLE) {
						this.numberValue = value;

						if (oldValue !== undefined) {
							this.numberErrors = this.validateNumberValue();
						}

						return;
					}

					this.numberValue = value?.slice(0, NUMBER_LENGTH) ?? '';
					this.keyValue = value?.slice(NUMBER_LENGTH, NUMBER_LENGTH + KEY_LENGTH) ?? '';

					if (oldValue !== undefined) {
						this.numberErrors = this.validateNumberValue();
						this.keyErrors = this.validateKeyValue();
					}
				},
				immediate: true
			}
		}
	})
	export default class NirField extends MixinsDeclaration {
		$refs!: Refs<{
			numberField: HTMLElement;
			keyField: HTMLElement;
		}>;

		locales = locales;

		checkIcon = mdiCheck;
		infoIcon = mdiInformationOutline;

		numberValue: string | null = null;
		keyValue: string | null = null;

		numberMask = '# ## ## #X ### ###';
		keyMask = '##';

		numberErrors: string[] = [];
		keyErrors: string[] = [];

		get textFieldOptions(): Options {
			return deepMerge<Options>(config, this.$attrs);
		}

		get numberFilled(): boolean {
			return this.numberValue?.length === NUMBER_LENGTH;
		}

		get numberRules(): ValidationRule[] {
			const rulesNumber: ValidationRule[] = [];

			if (this.required) {
				rulesNumber.push(
					requiredFn({ default: locales.errorRequiredNumber })
				);
			}

			rulesNumber.push(exactLength(NUMBER_LENGTH, true, {
				default: locales.errorLengthNumber
			}));

			return rulesNumber;
		}

		setNumberValue(event: InputFacadeEvent): void {
			this.numberValue = event.target?.unmaskedValue ?? null;
			this.emitInputEvent();
		}

		get keyFilled(): boolean {
			return this.keyValue?.length === KEY_LENGTH;
		}

		get keyRules(): ValidationRule[] {
			const rulesKey = [];

			if (this.required) {
				rulesKey.push(
					requiredFn({ default: locales.errorRequiredKey })
				);
			}

			rulesKey.push(exactLength(KEY_LENGTH, true, {
				default: locales.errorLengthKey
			}));

			return rulesKey;
		}

		triggerNumberValidation(): void {
			this.numberErrors = this.validateNumberValue();

			this.emitChangeEvent();
		}

		triggerKeyValidation(): void {
			this.keyErrors = this.validateKeyValue();

			this.emitChangeEvent();
		}

		/**
		 * As VInput gathers the error messages and as is value is a tuple,
		 * we run the rules ourself at the level of the internal fields
		 * in order to provide the fields value to the rules.
		 */
		validateNumberValue(): string[] {
			const newNumberErrors = [];

			for (const rule of this.numberRules) {
				const error = rule(this.numberValue);

				if (error && typeof error === 'string') {
					newNumberErrors.push(error);
				}
			}

			return newNumberErrors;
		}

		validateKeyValue(): string[] {
			const newKeyErrors = [];

			for (const rule of this.keyRules) {
				const error = rule(this.keyValue);

				if (error && typeof error === 'string') {
					newKeyErrors.push(error);
				}
			}

			return newKeyErrors;
		}

		/**
		 * The rules used by the VForm component to test the validity of the form
		 */
		get rules(): ValidationRule[] {
			const numberRules = () => {
				return this.validateNumberValue().length === 0;
			};

			return this.isSingleField ?
				[numberRules] :
				[
					numberRules,
					() => {
						return this.validateKeyValue().length === 0;
					}
				];
		}

		/**
		 * The errors displayed by the VInput wrapper to group the errors messages
		 */
		get errors(): string[] {
			return [...this.numberErrors, ...this.keyErrors];
		}

		setKeyValue(event: InputFacadeEvent): void {
			this.keyValue = event.target?.unmaskedValue ?? null;
			this.emitInputEvent();
		}

		get computedNumberValue(): string | null {
			return this.numberValue ? formatNir(this.numberValue) : null;
		}

		get internalValue(): string | null {
			if (this.isSingleField) {
				return this.numberValue ?? '';
			}

			return (this.numberValue ?? '') + (this.keyValue ?? '');
		}

		get isSingleField(): boolean {
			return this.nirLength === FieldTypesEnum.SINGLE;
		}

		focusKeyField({ key, altKey, ctrlKey, metaKey, shiftKey }: KeyboardEvent): void {
			const isSingleField = this.isSingleField;
			const notFilled = !this.numberFilled;
			// Don't move focus for combo (eg. Ctrl + A)
			const keyHasModifier = altKey || ctrlKey || metaKey || shiftKey;
			// Don't move focus for other keys (eg. ArrowRight)
			const isNotSingleAlphaNumChar = !/^[a-zA-Z0-9| ]$/.test(key);
			// Don't move focus is content is selected to allow overwrite
			const isContentSelected = document.getSelection()?.toString() === this.computedNumberValue;

			const shouldNotFocus = isSingleField || notFilled || keyHasModifier || isNotSingleAlphaNumChar || isContentSelected;

			if (shouldNotFocus) {
				return;
			}

			this.$refs.keyField.focus();
		}

		focusNumberField(): void {
			if (this.keyValue?.length !== 0) {
				return;
			}

			this.$refs.numberField.focus();
		}

		emitChangeEvent(): void {
			if (this.value !== this.internalValue) {
				this.$emit('change', this.internalValue);
			}
		}

		async emitInputEvent(): Promise<void> {
			if (this.value !== this.internalValue) {
				this.$emit('input', this.internalValue);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vd-number-field {
		width: 296px;
	}

	.vd-key-field {
		width: 84px;
	}

	// Don't allow resize for these elements
	.vd-nir-field :deep(.v-input__append-inner),
	.vd-number-field,
	.vd-key-field,
	.vd-tooltip-icon {
		flex: none;
	}

	.v-icon {
		display: flex;
		align-self: baseline;
	}

	:deep(.v-messages__message + .v-messages__message) {
		margin-top: 4px;
	}

	:deep(.v-input__slot) {
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.vd-nir-field--simple .vd-number-field {
		margin-right: 0 !important;
	}
</style>
