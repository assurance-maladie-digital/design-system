<template>
	<FormField v-model="field" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldText extends Vue {
		field: Field = {
			type: 'text',
			value: null,
			fieldOptions: {
				label: 'Votre nom',
				hideDetails: true,
				outlined: true
			}
		};
	}
</script>
