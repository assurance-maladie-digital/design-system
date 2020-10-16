<template>
	<FormFieldList v-model="fields" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Fields } from '@cnamts/form-builder/src/components/FormFieldList/types';

	@Component
	export default class FormFieldListEx extends Vue {
		fields: Fields = {
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
			},
			startDate: {
				type: 'date',
				value: null,
				fieldOptions: {
					label: 'Date de début de l\'arrêt',
					outlined: true
				}
			}
		};
	}
</script>
