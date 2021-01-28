<template>
	<FormField v-model="field" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldQuestion extends Vue {
		field: Field = {
			type: 'textarea',
			title: 'Vos symptômes',
			description: 'Décrivez les symptômes qui vous affectent et leur ordre d\'apparition.',
			value: null,
			fieldOptions: {
				label: 'Décrivez vos symptômes',
				hideDetails: true,
				outlined: true
			}
		};
	}
</script>
