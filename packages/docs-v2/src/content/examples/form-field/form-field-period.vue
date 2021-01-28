<template>
	<FormField v-model="field" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldEx extends Vue {
		field: Field = {
			type: 'period',
			value: {
				from: null,
				to: null
			},
			fieldOptions: {
				from: {
					label: 'Début',
					outlined: true
				},
				to: {
					label: 'Fin',
					outlined: true
				}
			}
		};
	}
</script>