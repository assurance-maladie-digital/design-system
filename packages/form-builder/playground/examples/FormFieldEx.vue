<template>
	<DocSection title="FormField">
		<FormField v-model="field" />
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '../../src/components/FormField/types';

	@Component
	export default class FormFieldEx extends Vue {
		field: Field = {
			type: 'text',
			value: null,
			metadata: {
				label: 'Votre nom',
				hideDetails: true,
				outlined: true
			}
		};
	}
</script>
