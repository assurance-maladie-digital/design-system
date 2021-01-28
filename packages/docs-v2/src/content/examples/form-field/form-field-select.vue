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
			type: 'select',
			dynamic: true,
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
				}
			],
			value: null,
			fieldOptions: {
				label: 'Moyen de contact',
				hideDetails: true,
				outlined: true
			}
		};
	}
</script>