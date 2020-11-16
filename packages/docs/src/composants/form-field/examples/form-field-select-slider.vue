<template>
	<div>
		<FormField v-model="field" />

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
	export default class FormFieldSelectSlider extends Vue {
		field: Field = {
			type: 'select',
			items: defaultItems,
			value: null,
			fieldOptions: {
				type: 'choiceSlider',
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
				type: 'choiceSlider',
				label: 'Moyen de contact',
				hideDetails: true,
				outlined: true
			},
			other: {
				fieldOptions: {
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
				type: 'choiceSlider',
				label: 'Moyen de contact',
				hideDetails: true,
				outlined: true
			},
			other: {
				selectedChoice: 'autre'
			}
		};
	}
</script>
