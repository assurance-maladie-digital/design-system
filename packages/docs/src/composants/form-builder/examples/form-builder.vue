<template>
	<Form-builder :form="form" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Form } from '@cnamts/form-builder/src/components/FormBuilder/types';

	@Component
	export default class FormBuilderEx extends Vue {
		form: Form = {
			section1: {
				title: 'Section 1',
				description: 'Description de la section 1',
				questions: {
					questionString: {
						type: 'text',
						title: 'Question ?',
						description: 'Informations supplémentaires',
						tooltip: 'Texte d\'aide\nSecond texte d\'aide',
						value: null,
						fieldOptions: {
							label: 'Label du champ',
							outlined: true
						}
					}
				}
			}
		};
	}
</script>
