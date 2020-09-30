<template>
	<FormField
		:field="field"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldQuestionEx extends Vue {
		field: Field = {
			type: 'text',
			title: 'Nom d\'utilisateur',
			description: 'Entrez votre nom préférer',
			tooltip: 'Visible par tout les utilisateurs',
			value: null,
			fieldOptions: {
				outlined: true
			}
		};
	}
</script>
