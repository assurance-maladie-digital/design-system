<template>
	<DocSection title="FormField">
		<FormField v-model="field" />
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '../../src/patterns/FormField/types';

	@Component
	export default class FormFieldEx extends Vue {
		field: Field = {
			type: 'password',
			value: null,
			metadata: {
				label: 'Mot de passe'
			}
		};
	}
</script>
