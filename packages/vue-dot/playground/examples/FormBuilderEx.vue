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
			},
			questionSelect: {
				type: 'select',
				title: 'Question select',
				description: 'Informations supplémentaires',
				tooltip: 'Texte d\'aide',
				value: null,
				items: [{ text: 'Abricot', value: 1 },{ text: 'Citron', value: 2 }],
				metadata: {
					outlined: true,
					chips: true,
					menuProps: { offsetY: true, openOnHover:true },
					label: 'Votre réponse',
					hint: 'Texte informatif',
					persistentHint: true
				}
			}
		};
	}
</script>
