<template>
	<FormBuilder :form="form" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Form } from '@cnamts/form-builder/src/components/FormBuilder/types';

	@Component
	export default class FormBuilderEx extends Vue {
		form: Form = {
			informations: {
				title: 'Vos informations',
				questions: {
					nir: {
						type: 'text',
						value: null,
						tooltip: 'Entrez votre Numéro de Sécurité Sociale sur 15 caractères',
						fieldOptions: {
							label: 'Numéro de Sécurité Sociale',
							outlined: true
						}
					},
					lastName: {
						type: 'text',
						value: null,
						fieldOptions: {
							label: 'Nom',
							outlined: true
						}
					},
					firstName: {
						type: 'text',
						value: null,
						fieldOptions: {
							label: 'Prénom',
							outlined: true
						}
					}
				}
			},
			health: {
				title: 'Votre état de santé',
				questions: {
					symptoms: {
						type: 'textarea',
						title: 'Vos symptômes',
						description: 'Décrivez les symptômes qui vous affectent et leur ordre d\'apparition',
						value: null,
						fieldOptions: {
							label: 'Décrivez vos symptômes',
							outlined: true
						}
					},
					symptomsDate: {
						type: 'date',
						value: null,
						description: 'Date d\'apparition des symptômes',
						fieldOptions: {
							label: 'Date d\'apparition',
							outlined: true
						}
					}
				}
			}
		};
	}
</script>
