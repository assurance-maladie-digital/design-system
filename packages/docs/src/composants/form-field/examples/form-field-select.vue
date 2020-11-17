<template>
	<div>
		<FormField v-model="field" />

		<h4 class="my-1">Multiple</h4>
		<FormField v-model="fieldMultiple" />

		<h4 class="my-4">Autre choix</h4>
		<FormField v-model="fieldOther" />

		<h4 class="my-4">Autre choix conditionnel</h4>
		<FormField v-model="fieldOtherCondition" />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';
	import { required, } from '@cnamts/vue-dot/src/rules/required';
	import { maxLength } from '@cnamts/vue-dot/src/rules/maxLength';

	const defaultItems = [
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
	]

	@Component
	export default class FormFieldSelect extends Vue {
		field: Field = {
			type: 'select',
			items: defaultItems,
			value: null,
			fieldOptions: {
				label: 'Moyen de contact',
				hideDetails: true,
				outlined: true
			}
		};

		fieldMultiple: Field = {
			type: 'select',
			multiple: true,
			items: defaultItems,
			value: null,
			fieldOptions: {
				label: 'Moyen de contact',
				hideDetails: true,
				outlined: true
			}
		};

		fieldOther: Field = {
			type: 'select',
			items: defaultItems,
			value: null,
			fieldOptions: {
				label: 'Moyen de contact',
				outlined: true
			},
			other: {
				fieldOptions: {
					rules: [ 
						required 
					],
					placeholder: 'autre'
				}
			}
		};

		fieldOtherCondition: Field = {
			type: 'select',
			items: [
				...defaultItems,
				{
					text: 'Autre',
					value: 'autre'
				}
			],
			value: null,
			fieldOptions: {
				label: 'Moyen de contact',
				outlined: true,
				hint: 'Autre choix possible',
				persistentHint: true
			},
			other: {
				selectedChoice: 'autre'
			}
		};
	}
</script>
