<template>
	<DocSection title="FormFieldList">
		<FormFieldList v-model="fields" />
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { addressForm } from '../../src/components/FormBuilder/tests/data/addressForm';

	const fields = addressForm.section1.questions;

	@Component
	export default class FormFieldListEx extends Vue {
		fields = fields;
	}
</script>
