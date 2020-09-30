<template>
	<FormField
		:field="field"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldEx extends Vue {
		field: Field = {
			type: 'text',
			value: null,
			fieldOptions: {
				outlined: true
			}
		};
	}
</script>
