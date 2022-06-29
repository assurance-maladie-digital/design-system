<template>
	<FormField v-model="field" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldSliderThumb extends Vue {
		field: Field = {
			type: 'select',
			items: [
				{
					text: '1 an',
					value: 1
				},
				{
					text: '2 ans',
					value: 2
				},
				{
					text: '3 ans',
					value: 3
				},
				{
					text: '4 ans',
					value: 4
				}
			],
			value: null,
			fieldOptions: {
				type: 'choiceSlider',
				label: 'Durée',
				hideDetails: true,
				thumbLabel: true,
				thumbSize: '36px'
			}
		};
	}
</script>
