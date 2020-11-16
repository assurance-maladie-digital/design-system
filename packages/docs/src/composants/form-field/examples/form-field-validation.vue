<template>
	<div>
		<FormField v-model="field" />

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
	import { required } from '@cnamts/vue-dot/src/rules/required';
	import { maxLength } from '@cnamts/vue-dot/src/rules/maxLength';

	const max = 2;

	@Component
	export default class FormFieldEx extends Vue {
		field: Field = {
			type: 'text',
			value: null,
			fieldOptions: {
				label: 'Votre nom',
				outlined: true,
				hint: `Champ requis, et maximum ${max} caractères`,
				persistentHint: true,
				rules: [
					required,
					maxLength(max)
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
					label: 'Du',
					outlined: true,
					textField: {
						rules: [ 
							required 
						],
						hint: 'Champ requis',
						persistentHint: true
					}
				},
				to: {
					label: 'Au',
					outlined: true,
					textField: {
						rules: [ 
							required 
						],
						hint: 'Champ requis',
						persistentHint: true
					}
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
				label: 'Moyen de contact',
				outlined: true,
				rules: [ 
						required 
				],
				hint: 'Champ requis',
				persistentHint: true
			},
			other: {
				fieldOptions: {
					rules: [ 
						required 
					],
					placeholder: 'autre',
					hint: 'Champ requis',
					persistentHint: true
				}
			}
		};
	}
</script>
