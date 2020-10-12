<template>
	<DocSection title="Rules">
		<h2 class="text-subtitle-1 mb-4 font-weight-bold">
			Required with custom message
		</h2>

		<VTextField
			:rules="textFieldRules"
			label="Required field"
			class="vd-form-input"
			outlined
		/>

		<h2 class="text-subtitle-1 my-4 font-weight-bold">
			Min length & required with default messages
		</h2>

		<VTextarea
			:rules="textareaRules"
			label="Required field"
			class="vd-form-input"
			outlined
			rows="1"
		/>

		<h2 class="text-subtitle-1 my-4 font-weight-bold">
			Max & min length with custom messages
		</h2>

		<VTextarea
			:rules="lengthRule"
			label="Length field"
			class="vd-form-input"
			outlined
			rows="1"
		/>

		<h2 class="text-subtitle-1 my-4 font-weight-bold">
			Special case for required (array)
		</h2>

		<VSelect
			v-model="selected"
			:rules="selectRules"
			:items="data"
			label="Select something"
			class="vd-form-input"
			outlined
			multiple
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { required, requiredFn } from '../../src/rules/required';
	import { maxLength } from '../../src/rules/maxLength';
	import { minLength } from '../../src/rules/minLength';

	import { ValidationRule } from '../../src/rules/types';

	@Component
	export default class RulesEx extends Vue {
		textFieldRules = [
			requiredFn({
				default: 'Field is required.'
			})
		];

		textareaRules: ValidationRule[] = [
			required,
			minLength(10) // Default error messages
		];

		lengthRule = [
			// Custom static error messages
			minLength(2, {
				default: 'Enter something!'
			}),
			// Custom dynamic error messages
			maxLength(10, {
				default: (max: number) => `Max ${max} chars!`
			})
		];

		selectRules = [
			required
		];

		selected = [];

		data = [
			'First',
			'Second',
			'Third'
		];
	}
</script>
