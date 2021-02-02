<template>
	<FormField v-model="field" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldPassword extends Vue {
		field: Field = {
			type: 'password',
			value: null,
			fieldOptions: {
				label: 'Votre mot de passe',
				hideDetails: true,
				outlined: true
			}
		};
	}
</script>
