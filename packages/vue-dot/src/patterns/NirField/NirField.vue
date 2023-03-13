<template>
	<VRow dense>
		<VCol
			:sm="tooltip && keyRequired ? 8 : tooltip ? 11 : keyRequired ? 9 : 12"
			:md="tooltip && keyRequired ? 8 : tooltip ? 11 : keyRequired ? 9 : 12"
		>
			<VTextField
				v-facade="maskNumber"
				v-bind="textFieldOptions"
				:value="computedValue"
				:rules="rulesNumber"
				:counter="computedCounterNumber"
				:counter-value="noSpacesCounter"
				:label="required ? locales.labelNumber + ' *' : locales.labelNumber"
				:aria-label="locales.labelNumber"
				:aria-describedby="hintNumber"
				:hint="hintNumber"
				:success="internalValueNumber && internalValueNumber.length === checkNumber"
				@input.native="setinternalValueNumber"
				@change="emitChangeEvent"
			>
				<template #append>
					<VIcon
						v-if="internalValueNumber && internalValueNumber.length === checkNumber"
						color="success"
					>
						{{ checkIcon }}
					</VIcon>
				</template>
			</VTextField>
		</VCol>
		<VCol
			v-if="keyRequired"
			sm="3"
			md="3"
		>
			<VTextField
				ref="keyField"
				v-facade="maskKey"
				v-bind="textFieldOptions"
				:value="computedValue"
				:rules="rulesKey"
				:counter="counterKey"
				:counter-value="noSpacesCounter"
				:label="required ? locales.labelKey + ' *' : locales.labelKey"
				:aria-label="locales.labelKey"
				:aria-describedby="hintKey"
				:hint="hintKey"
				:success="internalValueKey && internalValueKey.length === nirKey"
				@input.native="setinternalValueKey"
				@change="emitChangeEvent"
			>
				<template #append>
					<VIcon
						v-if="internalValueKey && internalValueKey.length === nirKey"
						color="success"
					>
						{{ checkIcon }}
					</VIcon>
				</template>
			</VTextField>
		</VCol>
		<VCol
			v-if="tooltip !== ''"
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
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';
	import { InputFacadeEvent } from '../../types';

	import { Options } from '../../mixins/customizable';

	import { required } from '../../rules/required';
	import { exactLength } from '../../rules/exactLength';
	import { ValidationRule } from '../../rules/types';

	import { formatNir } from '../../functions/formatNir';

	import { mdiCheck } from '@mdi/js';
	import { mdiInformation } from '@mdi/js';

	import deepMerge from 'deepmerge';

	const Props = Vue.extend({
		props: {
			value: {
				type: String,
				default: null
			},
			nirNumber: {
				type: Number,
				default: 15,
				validator(value): boolean {
					return value === 13 || value === 15;
				}
			},
			nirKey: {
				type: Number,
				default: 2,
				validator(value): boolean {
					return value === 2;
				}
			},
			keyRequired: {
				type: Boolean,
				default: false
			},
			required: {
				type: Boolean,
				default: false
			},
			tooltip: {
				type: String,
				default: ''
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		},
		inheritAttrs: false
	})
	export default class NirField extends MixinsDeclaration {
		locales = locales;
		checkIcon = mdiCheck;
		infoIcon = mdiInformation;

		internalValueNumber: string | null = null;
		internalValueKey: string | null = null;

		counterKey = this.nirKey;

		get textFieldOptions(): Options {
			return deepMerge<Options>(config, this.$attrs);
		}

		get computedCounterNumber(): number {
			return this.checkNumber;
		}

		get maskNumber(): string {
			if (this.keyRequired) {
				const maskNumber = '# ## ## #X ### ###';
				return maskNumber;
			} else {
				const maskNumber = '# ## ## #X ### ### ##';
				return maskNumber;
			}
		}

		get maskKey(): string {
			const maskKey = '##';
			return maskKey;
		}

		get rulesNumber(): ValidationRule[] {
			const rulesNumber = [];

			if (this.required) {
				rulesNumber.push(required);
			}

			rulesNumber.push(exactLength(this.checkNumber, true));

			return rulesNumber;
		}

		get rulesKey(): ValidationRule[] {
			const rulesKey = [];

			if (this.required) {
				rulesKey.push(required);
			}

			rulesKey.push(exactLength(this.nirKey, true));

			return rulesKey;
		}

		get computedValue(): string | null {
			return this.value ? formatNir(this.value) : null;
		}

		get hintNumber(): string {
			return locales.hintNumber(this.checkNumber);
		}

		get hintKey(): string {
			return locales.hintKey(this.nirKey);
		}

		get computedInternalValue(): string | null {
			if (this.keyRequired) {
				if (this.internalValueNumber?.length === this.checkNumber && this.internalValueKey?.length === this.nirKey) {
					return this.internalValueNumber + this.internalValueKey;
				}

				return null;
			} else {
				if (this.internalValueNumber?.length === this.checkNumber) {
					return this.internalValueNumber;
				}

				return null;
			}
		}

		get checkNumber(): number {
			if (this.keyRequired) {
				return this.nirNumber - this.nirKey;
			} else {
				return this.nirNumber;
			}
		}

		noSpacesCounter(value?: string | undefined): number {
			return value?.replace(/\s/g, '').length || 0;
		}

		setinternalValueNumber(event: InputFacadeEvent): void {
			this.internalValueNumber = event.target?.unmaskedValue ?? null;
			this.setFocus();
		}

		setinternalValueKey(event: InputFacadeEvent): void {
			this.internalValueKey = event.target?.unmaskedValue ?? null;
		}

		setFocus(): void {
			if (this.internalValueNumber?.length === this.checkNumber && this.keyRequired) {
				const keyFieldRef = this.$refs.keyField as HTMLInputElement;
				keyFieldRef.focus();
			}
		}

		emitChangeEvent(): void {
			if (this.computedInternalValue) {
				this.$emit('change', this.computedInternalValue);
			}
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
