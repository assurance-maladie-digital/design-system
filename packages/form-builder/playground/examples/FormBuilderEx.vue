<template>
	<DocSection title="Classic form">
		<FormBuilder v-model="addressForm" />
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { addressForm } from '../../src/components/FormBuilder/tests/data/addressForm';

	@Component
	export default class FormBuilderEx extends Vue {
		addressForm = addressForm;
	}
</script>
