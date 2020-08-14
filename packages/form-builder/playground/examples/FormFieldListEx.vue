<template>
	<DocSection title="FormFieldList">
		<FormFieldList v-model="fields" />
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { addressFields } from '../../src/components/FormFieldList/tests/data/addressFields';

	@Component
	export default class FormFieldListEx extends Vue {
		fields = addressFields;
	}
</script>
