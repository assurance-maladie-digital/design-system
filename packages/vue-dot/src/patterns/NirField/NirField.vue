<template>
	<VTextField
		v-facade="mask"
		v-bind="textFieldOptions"
		:value="computedValue"
		:rules="rules"
		:counter="counter"
		:counter-value="noSpacesCounter"
		:label="locales.label"
		:hint="hint"
		@input.native="setInternalValue"
		@change="emitChangeEvent"
	/>
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

	import deepMerge from 'deepmerge';

	const Props = Vue.extend({
		props: {
			value: {
				type: String,
				default: null
			},
			nirLength: {
				type: Number,
				default: 15,
				validator(value): boolean {
					return value === 15 || value === 13;
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

		internalValue: string | null = null;

		counter = this.nirLength;

		get textFieldOptions(): Options {
			return deepMerge<Options>(config, this.$attrs);
		}

		get mask(): string {
			const mask = '# ## ## #X ### ### ##';

			if (this.nirLength === 13) {
				return mask.slice(0, -3);
			}

			return mask;
		}

		get rules(): ValidationRule[] {
			const rules = [];

			if (this.required) {
				rules.push(required);
			}

			rules.push(exactLength(this.nirLength, true));

			return rules;
		}

		get computedValue(): string | null {
			return this.value ? formatNir(this.value) : null;
		}

		get hint(): string {
			return locales.hint(this.nirLength);
		}

		noSpacesCounter(value?: string | undefined): number {
			return value?.replace(/\s/g, '').length || 0;
		}

		setInternalValue(event: InputFacadeEvent): void {
			this.internalValue = event.target?.unmaskedValue ?? null;
		}

		emitChangeEvent(): void {
			this.$emit('change', this.internalValue);
		}
	}
</script>
