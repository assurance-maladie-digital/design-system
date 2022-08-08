<template>
	<VTextField
		v-facade="mask"
		v-bind="textFieldOptions"
		:value="computedValue"
		:rules="rules"
		:counter="counter"
		:counter-value="noSpacesCounter"
		:label="locales.label"
		@input.native="setInternalValue"
		@change="emitChangeEvent"
	>
		<template #append>
			<VIcon>
				{{ phoneIcon }}
			</VIcon>
		</template>
	</VTextField>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';
	import { InputFacadeEvent } from '../../types';

	import { Options } from '../../mixins/customizable';

	import { required } from '@cnamts/vue-dot/src/rules/required';
	import { exactLength } from '@cnamts/vue-dot/src/rules/exactLength';
	import { ValidationRule } from '../../rules/types';

	import { mdiPhone } from '@mdi/js';

	import deepMerge from 'deepmerge';

	const PHONE_LENGTH = 10;

	const Props = Vue.extend({
		props: {
			value: {
				type: String,
				default: undefined
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
	export default class PhoneField extends MixinsDeclaration {
		locales = locales;

		phoneIcon = mdiPhone;

		internalValue: string | null = null;

		counter = PHONE_LENGTH;

		mask = '## ## ## ## ##';

		get textFieldOptions(): Options {
			return deepMerge<Options>(config, this.$attrs);
		}

		get rules(): ValidationRule[] {
			const rules = [];

			if (this.required) {
				rules.push(required);
			}

			rules.push(exactLength(PHONE_LENGTH, true));

			return rules;
		}

		get computedValue(): string | null {
			return this.value ? this.formatPhone(this.value) : null;
		}

		formatPhone(value: string): string {
			const phone = value.match(/.{1,2}/g);

			if (!phone) {
				return '';
			}

			return phone.join(' ');
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
