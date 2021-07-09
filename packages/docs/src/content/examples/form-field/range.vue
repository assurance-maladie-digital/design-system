<template>
	<FormField v-model="field" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldRange extends Vue {
		field: Field = {
			type: 'range',
			min: 0,
			max: 100,
			value: null,
			fieldOptions: {
				outlined: true
			}
		};
	}
</script>