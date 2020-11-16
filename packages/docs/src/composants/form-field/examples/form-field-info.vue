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
import dayjs from 'dayjs';

	@Component
	export default class FormFieldEx extends Vue {
		text: Field = {
			type: 'text',
			value: null,
			fieldOptions: {
				label: 'Votre nom',
				outlined: true,
				hint: 'Information sur le champ',
				persistentHint: true
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
						hint: 'Format accepté JJ/MM/AAAA',
						persistentHint: true
					},
				},
				to: {
					label: 'Au',
					outlined: true,
					textField: {
						hint: 'Format accepté JJ/MM/AAAA',
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
				hint: 'Information sur le champ',
				persistentHint: true,
				outlined: true
			},
			other: {
				fieldOptions: {
					placeholder: 'autre',
					hint: 'Information sur le champ',
					persistentHint: true
				}
			}
		};
	}
</script>
