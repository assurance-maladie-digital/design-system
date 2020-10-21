<template>
	<DocSection title="FormBuilder">
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

		<pre
			v-if="formErrors"
			contenteditable="true"
			class="mt-4"
			:class="[
				$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
			]"
			@blur="formErrors = JSON.parse($event.target.textContent)"
			v-html="formErrors"
		/>

		<VBtn
			class="mt-5"
			color="accent"
			@click="setFormErrors"
		>
			Set errors messages
		</VBtn>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { questionForm } from '../../src/components/FormBuilder/tests/data/questionForm';
	import { formErrors } from '../../src/functions/setFormErrors/tests/data/formErrors';

	import { getFormValues } from '../../src/functions/getFormValues';
	import { FormValues } from '../../src/functions/getFormValues/types';
	import { setFormErrors } from '../../src/functions/setFormErrors';

	@Component
	export default class FormBuilderEx extends Vue {
		questionForm = questionForm;
		formErrors = formErrors;

		questionValues: FormValues | null = null;

		getFormValues(): void {
			this.questionValues = getFormValues(this.questionForm);
		}

		setFormErrors(): void {
			this.questionForm = setFormErrors(this.formErrors, this.questionForm);
		}
	}
</script>

<style lang="scss" scoped>
	pre {
		border: 1px solid;
		border-radius: 4px;
	}
</style>
