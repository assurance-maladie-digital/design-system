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
			type: 'date',
			value: null,
			fieldOptions: {
				label: 'Votre date de naissance',
				outlined: true
			}
		};
	}
</script>