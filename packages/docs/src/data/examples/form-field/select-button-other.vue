<template>
	<FormField v-model="field" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldSelectButtonOther extends Vue {
		field: Field = {
			type: 'select',
			items: [
				{
					text: 'Email',
					value: 'email'
				},
				{
					text: 'Courrier',
					value: 'mail'
				},
				{
					text: 'SMS',
					value: 'sms'
				},
				{
					text: 'Autre',
					value: 'other'
				}
			],
			value: null,
			other: {
				label: 'Saisir autre moyen de contact',
				selectedChoice: 'other'
			},
			fieldOptions: {
				type: 'choiceButton',
				label: 'Moyen de contact',
				hideDetails: true,
				outlined: true
			}
		};
	}
</script>
