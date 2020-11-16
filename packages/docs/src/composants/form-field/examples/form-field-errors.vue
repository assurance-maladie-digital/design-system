<template>
	<div>
		<FormField v-model="text" />

		<h4 class="my-4">Champ période</h4>
		<FormField v-model="period" />

		<h4 class="my-4">Champ select et autre</h4>
		<FormField v-model="select" />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldEx extends Vue {
		text: Field = {
			type: 'text',
			value: null,
			fieldOptions: {
				label: 'Votre nom',
				hideDetails: true,
				outlined: true,
				errorMessages: [
					'Erreur api'
				]
			}
		};

		period: Field = {
			type: 'period',
			value: {
				from: null,
				to: null
			},
			fieldOptions: {
				from: {
					outlined: true,
					errorMessages: [
						'Erreur api'
					]
				},
				to: {
					outlined: true,
					errorMessages: [
						'Erreur api'
					]
				}
			}
		};

		select: Field = {
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
				}
			],
			value: null,
			fieldOptions: {
				errorMessages: [
					'Erreur api'
				],
				label: 'Moyen de contact',
				outlined: true
			},
			other: {
				fieldOptions: {
					placeholder: 'autre',
					errorMessages: [
						'Erreur api'
					]
				}
			}
		};
	}
</script>
