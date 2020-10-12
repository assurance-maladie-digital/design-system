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
			section1: {
				title: 'informations personnelles',
				description: 'Description de la section 1',
				questions: {
					questionName: {
						type: 'text',
						title: 'Nom d\'utilisateur',
						value: null,
						fieldOptions: {
							outlined: true
						}
					},
					questionAge: {
						type: 'password',
						title: 'Mot de passe',
						value: null,
						fieldOptions: {
							outlined: true
						}
					}
				}
			},
			section2: {
				title: 'Autre informations',
				questions: {
					questionString: {
						type: 'date',
						title: 'Début de mission',
						value: null,
						fieldOptions: {
							outlined: true
						}
					}
				}
			}
		};
	}
</script>
