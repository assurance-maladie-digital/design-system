<template>
	<VRow dense>
		<VCol
			cols="7"
			md="8"
			xl="9"
		>
			<VTextField
				v-facade="mask1"
				v-bind="textFieldOptions"
				:value="computedValue"
				:rules="rules1"
				:counter="counter1"
				:counter-value="noSpacesCounter"
				:label="locales.label1"
				:hint="hint1"
				:success="internalValue1 && internalValue1.length === nirLength1"
				@input.native="setInternalValue1"
				@change="emitChangeEvent"
			>
				<template #append>
					<VIcon
						v-if="internalValue1 && internalValue1.length === nirLength1"
						color="success"
					>
						{{ checkIcon }}
					</VIcon>
				</template>
			</VTextField>
		</VCol>
		<VCol
			cols="5"
			md="4"
			xl="3"
		>
			<VTextField
				ref="keyField"
				v-facade="mask2"
				v-bind="textFieldOptions"
				:value="computedValue"
				:rules="rules2"
				:counter="counter2"
				:counter-value="noSpacesCounter"
				:label="locales.label2"
				:hint="hint2"
				:success="internalValue2 && internalValue2.length === nirLength2"
				@input.native="setInternalValue2"
				@change="emitChangeEvent"
			>
				<template #append>
					<VIcon
						v-if="internalValue2 && internalValue2.length === nirLength2"
						color="success"
					>
						{{ checkIcon }}
					</VIcon>
				</template>
			</VTextField>
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

	import deepMerge from 'deepmerge';

	const Props = Vue.extend({
		props: {
			value: {
				type: String,
				default: null
			},
			nirLength1: {
				type: Number,
				default: 13,
				validator(value): boolean {
					return value === 13;
				}
			},
			nirLength2: {
				type: Number,
				default: 2,
				validator(value): boolean {
					return value === 2;
				}
			},
			required: {
				type: Boolean,
				default: false
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

		internalValue1: string | null = null;
		internalValue2: string | null = null;

		counter1 = this.nirLength1;
		counter2 = this.nirLength2;

		get textFieldOptions(): Options {
			return deepMerge<Options>(config, this.$attrs);
		}

		get mask1(): string {
			const mask1 = '# ## ## #X ### ###';

			if (this.nirLength1 === 13) {
				return mask1;
			}

			return mask1;
		}

		get mask2(): string {
			const mask2 = '##';

			if (this.nirLength2 === 2) {
				return mask2;
			}

			return mask2;
		}

		get rules1(): ValidationRule[] {
			const rules1 = [];

			if (this.required) {
				rules1.push(required);
			}

			rules1.push(exactLength(this.nirLength1, true));

			return rules1;
		}

		get rules2(): ValidationRule[] {
			const rules2 = [];

			if (this.required) {
				rules2.push(required);
			}

			rules2.push(exactLength(this.nirLength2, true));

			return rules2;
		}

		get computedValue(): string | null {
			return this.value ? formatNir(this.value) : null;
		}

		get hint1(): string {
			return locales.hint1(this.nirLength1);
		}

		get hint2(): string {
			return locales.hint2(this.nirLength2);
		}

		get computedInternalValue(): string | null {
			if (this.internalValue1?.length === this.nirLength1 && this.internalValue2?.length === this.nirLength2) {
				return this.internalValue1 + this.internalValue2;
			}

			return null;
		}

		noSpacesCounter(value?: string | undefined): number {
			return value?.replace(/\s/g, '').length || 0;
		}

		setInternalValue1(event: InputFacadeEvent): void {
			this.internalValue1 = event.target?.unmaskedValue ?? null;
			this.setFocus();
		}

		setInternalValue2(event: InputFacadeEvent): void {
			this.internalValue2 = event.target?.unmaskedValue ?? null;
		}

		setFocus(): void {
			if (this.internalValue1?.length === this.nirLength1) {
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
