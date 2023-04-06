<template>
	<VRow dense>
		<VCol>
			<VTextField
				ref="number"
				v-facade="numberMask"
				v-bind="textFieldOptions"
				:value="computedValue"
				:label="locales.numberLabel"
				:hint="numberHint"
				:rules="numberRules"
				:counter="13"
				:counter-value="noSpacesCounter"
				:success="isNumberLengthValid"
				@keyup="setFocus"
				@input.native="setNumberValue"
				@change="emitChangeEvent"
			>
				<template #append>
					<VIcon
						v-if="isNumberLengthValid"
						v-bind="options.icon"
					>
						{{ checkIcon }}
					</VIcon>
				</template>
			</VTextField>
		</VCol>

		<VCol
			v-if="nirLength === 15"
			sm="3"
			md="3"
		>
			<VTextField
				ref="key"
				v-facade="keyMask"
				v-bind="textFieldOptions"
				:value="computedValue"
				:label="locales.keyLabel"
				:hint="locales.keyHint"
				:rules="keyRules"
				:counter="2"
				:counter-value="noSpacesCounter"
				:success="isKeyLengthValid"
				@keyup.delete="resetFocus"
				@input.native="setKeyValue"
				@change="emitChangeEvent"
			>
				<template #append>
					<VIcon
						v-if="isKeyLengthValid"
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

	// Largeur du champ à revoir avec UX, ne respecte pas les Design Tokens

	const Props = Vue.extend({
		props: {
			value: {
				type: String,
				default: null
			},
			nirLength: {
				type: Number as PropType<15 | 13>,
				default: 15,
				validator(value): boolean {
					return value === 13 || value === 15;
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

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		},
		inheritAttrs: false
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
		keyMask = '##';

		get textFieldOptions(): Options {
			return deepMerge<Options>(config, this.$attrs);
		}

		get numberHint(): string {
			return locales.numberHint(13);
		}

		get isNumberLengthValid(): boolean {
			return this.numberValue?.length === 13;
		}

		get numberRules(): ValidationRule[] {
			const rulesNumber = [];

			if (this.required) {
				rulesNumber.push(required);
			}

			rulesNumber.push(exactLength(13, true));

			return rulesNumber;
		}

		setNumberValue(event: InputFacadeEvent): void {
			this.numberValue = event.target?.unmaskedValue ?? null;
		}

		get isKeyLengthValid(): boolean {
			return this.keyValue?.length === 2;
		}

		get keyRules(): ValidationRule[] {
			const rulesKey = [];

			if (this.required) {
				rulesKey.push(required);
			}

			rulesKey.push(exactLength(2, true));

			return rulesKey;
		}

		noSpacesCounter(value?: string | undefined): number {
			return value?.replace(/\s/g, '').length || 0;
		}

		setKeyValue(event: InputFacadeEvent): void {
			this.keyValue = event.target?.unmaskedValue ?? null;
			this.resetFocus();
		}







		get computedValue(): string | null {
			return this.value ? formatNir(this.value) : null; // Ne fonctionne pas
		}

		get internalValue(): string | null {
			return null;
			// if (this.keyRequired) {
			// 	if (this.internalValueNumber?.length === this.checkNumber && this.internalValueKey?.length === 2) {
			// 		return this.internalValueNumber + this.internalValueKey;
			// 	}

			// 	return null;
			// } else {
			// 	if (this.internalValueNumber?.length === this.checkNumber) {
			// 		return this.internalValueNumber;
			// 	}

			// 	return null;
			// }
		}

		get isSingleField(): boolean {
			return this.nirLength === 13;
		}

		// Revoir la gestion du focus
		async setFocus(event: KeyboardEvent) {
			await this.$nextTick();

			if (this.isSingleField || !this.isNumberLengthValid) {
				return;
			}

			// TODO inverser le fonctionnement
			if (event.key === 'Backspace' || event.key === 'Delete') {
				return
			}

			this.$refs.key.focus();
		}

		resetFocus() {
			if (this.isSingleField || this.keyValue?.length !== 0) {
				return;
			}

			this.$refs.number.focus();
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
	.row {
		margin: 0;
	}
	.v-icon {
		min-width: 24px;
	}
</style>
