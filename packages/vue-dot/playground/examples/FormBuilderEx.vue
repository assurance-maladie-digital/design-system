<template>
	<DocSection title="FormBuilder">
		<h2 class="subtitle-1 mb-2 font-weight-bold">
			Classic form
		</h2>

		<FormBuilder
			v-model="addressForm"
			:layout="addressFormLayout"
		/>

		<h2 class="subtitle-1 mt-4 mb-2 font-weight-bold">
			Questionnaire
		</h2>

		<FormBuilder
			v-model="questionForm"
			default-layout="question"
		/>

		<VBtn
			color="accent"
			@click="getFormValues"
		>
			Get question values
		</VBtn>

		<pre
			v-if="questionValues"
			class="mt-4 grey lighten-3"
			v-html="questionValues"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Layout } from '../../src/patterns/FormBuilder/types';
	import { Layouts } from '../../src/patterns/FormLayout/layoutsEnum';

	import addressForm from '../../src/patterns/FormBuilder/tests/data/addressForm';
	import questionForm from '../../src/patterns/FormBuilder/tests/data/questionForm';
	import getFormValues from '../../src/functions/getFormValues';
	import { FormValues } from '../../src/functions/getFormValues/types';

	@Component
	export default class FormBuilderEx extends Vue {
		addressForm = addressForm;

		questionForm = questionForm;

		questionValues: FormValues | null = null;

		addressFormLayout: Layout = [
			{
				type: Layouts.Medium_Medium,
				fields: [
					'streetNumber',
					'streetNumberComplement'
				]
			},
			{
				type: Layouts.Medium,
				fields: ['streetType']
			},
			{
				type: Layouts.Medium,
				fields: ['streetLabel']
			},
			{
				type: Layouts.Medium,
				fields: ['streetComplement']
			},
			{
				type: Layouts.Medium_Medium,
				fields: [
					'postalCode',
					'city'
				]
			}
		];

		getFormValues() {
			this.questionValues = getFormValues(this.questionForm);
		}
	}
</script>
