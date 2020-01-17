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
	import { Form, Layout } from '../../src/patterns/FormBuilder/types';
	import { Layouts } from '../../src/patterns/FormLayout/layoutsEnum';

	@Component
	export default class FormBuilderEx extends Vue {
		addressForm: Form = {
			streetNumber: {
				type: 'number',
				value: null,
				mask: '#####',
				metadata: {
					type: 'string',
					label: 'Numéro de voie'
				}
			},
			streetNumberComplement: {
				type: 'select',
				value: null,
				items: [
					{
						text: 'bis',
						value: 'valueBis'
					},
					{
						text: 'ter',
						value: 'valueTer'
					},
					{
						text: 'quater',
						value: 'valueQuater'
					}
				],
				metadata: {
					label: 'Complément de voie'
				}
			},
			streetType: {
				type: 'autocomplete',
				value: null,
				items: [
					{
						text: 'Allée',
						value: 'valueAllée'
					},
					{
						text: 'Avenue',
						value: 'valueAvenue'
					},
					{
						text: 'Boulevard',
						value: 'valueBoulevard'
					},
					{
						text: 'Aucun',
						value: null
					}
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
			question2: {
				type: 'textarea',
				title: 'Question',
				description: 'Informations supplémentaires',
				tooltip: 'Texte d\'aide',
				value: null,
				metadata: {
					outlined: true,
					persistentHint: true,
					hint: 'Texte informatif',
					placeholder: 'Votre réponse'
				}
			},
			questionDate: {
				type: 'date',
				title: 'Question Date',
				description: 'Informations supplémentaires',
				tooltip: 'Texte d\'aide',
				value: null,
				metadata: {
					appendIcon: true,
					textField: {
						outlined: true
					}
				}
			},
			questionPeriod: {
				type: 'period',
				title: 'Question période',
				description: 'Informations supplémentaires',
				tooltip: 'Texte d\'aide',
				metadata: {
					appendIcon: true,
					from: {
						textField: {
							label: 'Du',
							outlined: true
						}
					},
					to: {
						textField: {
							label: 'Au',
							outlined: true
						}
					}
				}
			},
			questionSelect: {
				type: 'select',
				title: 'Question select',
				description: 'Informations supplémentaires',
				value: null,
				items: [
					{
						text: 'Abricot',
						value: 1
					},
					{
						text: 'Citron',
						value: 2
					}
				],
				metadata: {
					outlined: true,
					chips: true,
					menuProps: {
						offsetY: true
					},
					label: 'Votre réponse'
				}
			},
			questionSelectMultiple: {
				type: 'select',
				title: 'Question choix multiple',
				description: 'Informations supplémentaires',
				value: null,
				items: [
					{
						text: 'Abricot',
						value: 1
					},
					{
						text: 'Citron',
						value: 2
					}
				],
				metadata: {
					multiple: true,
					outlined: true,
					label: 'Votre réponse'
				}
			},
			questionAutocomplete: {
				type: 'string',
				title: 'Question avec complétion automatique',
				description: 'Informations supplémentaires',
				value: null,
				items: [
					{
						text: 'Abricot',
						value: 1
					},
					{
						text: 'Citron',
						value: 2
					}
				],
				metadata: {
					type: 'autocomplete',
					multiple: true,
					outlined: true,
					chips: true,
					menuProps: {
						offsetY: true
					},
					label: 'Votre réponse'
				}
			},
			questionSelectButton: {
				type: 'select',
				title: 'Question select button',
				description: 'Informations supplémentaires',
				items: [
					{
						text: 'multiple 1',
						value: 11
					},
					{
						text: 'multiple 2',
						value: 22
					},
					{
						text: 'seul 1',
						value: 33,
						alone: true
					},
					{
						text: 'seul 2',
						value: 44,
						alone: true
					}
				],
				metadata: {
					type: 'choiceButton',
					multiple: true,
					hint: 'hint'
				}
			}
		};
	}
</script>
