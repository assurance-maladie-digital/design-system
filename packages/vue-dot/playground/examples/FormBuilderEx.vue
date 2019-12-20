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

		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Configuration short text
		</h2>
		<VBtn
			v-if="!showShortTextConfig"
			@click="showShortTextConfig = true"
		>
			Voir config
		</VBtn>
		<textarea
			v-else
			class="blue-grey lighten-5"
			style="width:100%"
			cols="50"
			rows="17"
			@change="formShortText = JSON.parse($event.target.value)"
			v-html="formShortText"
		/>

		<FormBuilder
			v-model="formShortText"
			:layout="questionLayoutShortText"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	// TODO: Improve type importation/exportation
	import { Form } from '../../src/patterns/FormField/types';
	import { Layout } from '../../src/patterns/FormBuilder/types';
	import { Layouts } from '../../src/patterns/FormLayout/layoutsEnum';

	@Component
	export default class FormBuilderEx extends Vue {
		showShortTextConfig = false;
		formShortText = {
			short_text_1: {
				type: 'string',
				title: 'Question',
				tooltip: 'tooltip information',
				value: null,
				metadata: {
					class: 'pt-1',
					label: 'Votre réponse',
					outlined: true,
					hint: 'Texte informatif',
					persistentHint: true
				}
			},
			short_text_2: {
				type: 'string',
				title: 'Question',
				description: 'information supplémentaire',
				tooltip: 'tooltip information',
				value: null,
				metadata: {
					label: 'Votre réponse',
					counter: false,
					outlined: true,
					clearable: true,
					prefix: '',
					suffix: '',
					placeholder: 'placeholder'
				}
			}
		};

		questionLayoutShortText = [
			{
				type: 'question',
				fields: ['short_text_1']
			},
			{
				type: 'question',
				fields: ['short_text_2']
			}
		];

		addressForm: Form = {
			streetNumber: {
				type: 'number',
				value: null,
				mask: '#####',
				metadata: {
					label: 'Numéro de voie'
				}
			},
			streetNumberComplement: {
				type: 'select',
				value: null,
				items: [
					'bis',
					'ter',
					'quater'
				],
				metadata: {
					label: 'Complément de voie'
				}
			},
			streetType: {
				type: 'autocomplete',
				value: null,
				items: [
					'Allée',
					'Avenue',
					'Boulevard',
					'Aucun'
				],
				metadata: {
					label: 'Type de voie'
				}
			},
			streetLabel: {
				type: 'string',
				value: null,
				metadata: {
					label: 'Libellé de la voie'
				}
			},
			streetComplement: {
				type: 'string',
				value: null,
				metadata: {
					label: 'Complément d\'adresse'
				}
			},
			postalCode: {
				type: 'number',
				value: null,
				mask: '#####',
				metadata: {
					label: 'Code postal'
				}
			},
			city: {
				type: 'string',
				value: null,
				metadata: {
					label: 'Ville'
				}
			}
		};

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

		questionForm: Form = {
			question1: {
				type: 'string',
				title: 'Question ?',
				description: 'Informations supplémentaires',
				tooltip: 'Texte d\'aide',
				value: null,
				metadata: {
					label: 'Label du champ'
				}
			}
		};
	}
</script>
