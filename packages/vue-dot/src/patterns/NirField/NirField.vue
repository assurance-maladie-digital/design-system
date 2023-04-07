<template>
	<VRow dense>
		<VCol>
			<VTextField
				ref="number"
				v-facade="numberMask"
				v-bind="textFieldOptions"
				:value="computedNumberValue"
				:label="locales.numberLabel"
				:hint="locales.numberHint"
				:rules="numberRules"
				:counter="numberCounter"
				:counter-value="noSpacesCounter"
				:success="numberFilled"
				@keydown="focusKeyField"
				@input.native="setNumberValue"
				@change="emitChangeEvent"
			>
				<template #append>
					<VIcon
						v-if="numberFilled"
						v-bind="options.icon"
					>
						{{ checkIcon }}
					</VIcon>
				</template>
			</VTextField>
		</VCol>

		<VCol
			v-if="!isSingleField"
			sm="3"
			md="3"
		>
			<VTextField
				ref="key"
				v-facade="keyMask"
				v-bind="textFieldOptions"
				:value="computedKeyValue"
				:label="locales.keyLabel"
				:hint="locales.keyHint"
				:rules="keyRules"
				:counter="keyCounter"
				:counter-value="noSpacesCounter"
				:success="keyFilled"
				@keyup.delete="focusNumberField"
				@input.native="setKeyValue"
				@change="emitChangeEvent"
			>
				<template #append>
					<VIcon
						v-if="keyFilled"
						v-bind="options.icon"
					>
						{{ checkIcon }}
					</VIcon>
				</template>
			</VTextField>
		</VCol>

		<VCol
			v-if="tooltip"
			cols="1"
			class="d-flex align-start justify-center pt-5"
		>
			<VTooltip top>
				<template #activator="{ on, attrs }">
					<VIcon
						v-bind="attrs"
						v-on="on"
					>
						{{ infoIcon }}
					</VIcon>
				</template>

				<span>{{ tooltip }}</span>
			</VTooltip>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';
	import { InputFacadeEvent, Refs } from '../../types';

	import { customizable, Options } from '../../mixins/customizable';

	import { required } from '../../rules/required';
	import { exactLength } from '../../rules/exactLength';
	import { ValidationRule } from '../../rules/types';

	import { formatNir } from '../../functions/formatNir';

	import { mdiCheck, mdiInformation } from '@mdi/js';

	import deepMerge from 'deepmerge';

	enum FieldTypesEnum {
		SINGLE = 13,
		DOUBLE = 15
	}

	const NUMBER_LENGTH = 13;
	const KEY_LENGTH = 2;
	const SPACE_CHARACTER = ' ';

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
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component<NirField>({
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			value: {
				handler(value: string | null) {
					if (!value) {
						return;
					}

					if (this.value.length >= FieldTypesEnum.SINGLE) {
						this.numberValue = value;
					}

					if (this.value.length === FieldTypesEnum.DOUBLE) {
						this.numberValue = value.slice(0, -KEY_LENGTH);
						this.keyValue = value.slice(NUMBER_LENGTH, NUMBER_LENGTH + KEY_LENGTH);
					}
				},
				immediate: true
			}
		}
	})
	export default class NirField extends MixinsDeclaration {
		$refs!: Refs<{
			number: HTMLElement;
			key: HTMLElement;
		}>;

		locales = locales;

		checkIcon = mdiCheck;
		infoIcon = mdiInformation;

		numberValue: string | null = null;
		keyValue: string | null = null;

		numberMask = '# ## ## #X ### ###';
		numberCounter = NUMBER_LENGTH;

		keyMask = '##';
		keyCounter = KEY_LENGTH;

		get textFieldOptions(): Options {
			return deepMerge<Options>(config, this.$attrs);
		}

		get numberFilled(): boolean {
			return this.numberValue?.length === NUMBER_LENGTH;
		}

		get numberRules(): ValidationRule[] {
			const rulesNumber = [];

			if (this.required) {
				rulesNumber.push(required);
			}

			rulesNumber.push(exactLength(NUMBER_LENGTH, true));

			return rulesNumber;
		}

		setNumberValue(event: InputFacadeEvent): void {
			this.numberValue = event.target?.unmaskedValue ?? null;
		}

		get keyFilled(): boolean {
			return this.keyValue?.length === KEY_LENGTH;
		}

		get keyRules(): ValidationRule[] {
			const rulesKey = [];

			if (this.required) {
				rulesKey.push(required);
			}

			rulesKey.push(exactLength(KEY_LENGTH, true));

			return rulesKey;
		}

		setKeyValue(event: InputFacadeEvent): void {
			this.keyValue = event.target?.unmaskedValue ?? null;
		}

		get computedNumberValue(): string | null {
			return this.numberValue ? formatNir(this.numberValue) : null;
		}

		get computedKeyValue(): string | null {
			return this.keyValue ? this.keyValue.split('').join(SPACE_CHARACTER) : null;
		}

		get internalValue(): string | null {
			if (this.isSingleField && this.numberFilled) {
				return this.numberValue;
			}

			if (!this.numberFilled || !this.keyFilled) {
				return null;
			}

			return this.numberValue as string + this.keyValue as string;
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

			this.$refs.key.focus();
		}

		focusNumberField(): void {
			if (this.keyValue?.length !== 0) {
				return;
			}

			this.$refs.number.focus();
		}

		noSpacesCounter(value?: string | undefined): number {
			return value?.replace(/\s/g, '').length || 0;
		}

		emitChangeEvent(): void {
			if (!this.internalValue) {
				return;
			}

			this.$emit('change', this.internalValue);
		}
	}
</script>

<style lang="scss" scoped>
	// TODO: Largeur du champ à revoir avec UX, ne respecte pas les Design Tokens
	.row {
		margin: 0;
	}

	.v-icon {
		min-width: 24px;
	}
</style>
