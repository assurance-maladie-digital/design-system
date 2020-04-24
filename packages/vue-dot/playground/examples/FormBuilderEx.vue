<template>
	<DocSection title="FormBuilder">
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Classic form
		</h2>

		<FormBuilder v-model="addressForm" />

		<h2 class="subtitle-1 mt-4 mb-4 font-weight-bold">
			Questionnaire
		</h2>

		<FormBuilder v-model="questionForm" />

		<VBtn
			class="mt-5"
			color="accent"
			@click="getFormValues"
		>
			Get question values
		</VBtn>

		<pre
			v-if="questionValues"
			class="mt-4 px-2 py-1"
			v-html="questionValues"
		/>

		<!-- <VBtn
			class="mt-5"
			color="accent"
			@click="setFormErrors"
		>
			Set errors messages
		</VBtn>

		<pre
			v-if="questionErrors"
			contenteditable="true"
			class="mt-4"
			:class="[
				$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
			]"
			@blur="questionErrors = JSON.parse($event.target.textContent)"
			v-html="questionErrors"
		/> -->
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { addressForm } from '../../src/patterns/FormBuilder/tests/data/addressForm';
	import { questionForm } from '../../src/patterns/FormBuilder/tests/data/questionForm';
	import { questionErrors } from '../../src/functions/setFormErrors/tests/data/formErrors';

	import { getFormValues } from '../../src/functions/getFormValues';
	import { FormValues } from '../../src/functions/getFormValues/types';
	import { setFormErrors } from '../../src/functions/setFormErrors';

	@Component
	export default class FormBuilderEx extends Vue {
		addressForm = addressForm;
		questionForm = questionForm;
		questionErrors = questionErrors;

		questionValues: FormValues | null = null;

		getFormValues() {
			this.questionValues = getFormValues(this.questionForm);
		}

		setFormErrors() {
			this.questionForm = setFormErrors(this.questionErrors, this.questionForm);
		}
	}
</script>

<style lang="scss" scoped>
	pre {
		border: 1px solid;
		border-radius: 4px;
	}
</style>
