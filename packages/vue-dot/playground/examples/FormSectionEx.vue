<template>
	<DocSection title="FormSection">
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Classic form
		</h2>

		<FormSection
			v-model="addressForm"
			:layout="addressFormLayout"
		/>

		<h2 class="subtitle-1 mt-4 mb-4 font-weight-bold">
			Questionnaire
		</h2>

		<FormSection
			v-model="questionForm"
			title="Titre section"
			default-layout="question"
			@refresh="sectionsRefresh"
			@change="getFormValues"
		/>

		<VBtn
			class="mt-5"
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

		<VBtn
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
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

	import { Layout } from '../../src/patterns/FormSection/types';
	import { Layouts } from '../../src/patterns/FormLayout/layoutsEnum';

	import { Form } from '../../src/patterns/FormSection/types';
	import { addressForm } from '../../src/patterns/FormSection/tests/data/addressForm';
	import { questionForm } from '../../src/patterns/FormSection/tests/data/questionForm';

	import { getFormValues } from '../../src/functions/getFormValues';
	import { FormValues } from '../../src/functions/getFormValues/types';
	import { setFormErrors } from '../../src/functions/setFormErrors';
	import { FormErrors } from '../../src/functions/setFormErrors/types';
	import { questionErrors } from '../../src/functions/setFormErrors/tests/data/formErrors';

	@Component({
		// Vuex bindings
		methods: mapActions('notification', [
			'notify',
			'rmNotif'
		])
	})
	export default class FormSectionEx extends Vue {
		notify!: (obj: object) => void;

		addressForm: Form = addressForm;

		questionForm: Form = questionForm;

		questionErrors: FormErrors = questionErrors;

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

		setFormErrors() {
			this.questionForm = setFormErrors(this.questionErrors, this.questionForm) as Form;
		}

		sectionsRefresh() {
			// Notify!
			this.notify({
				type: 'success',
				message: 'champ dynamic changé, rafraichissement demandé'
			});
		}
	}
</script>
