<template>
	<VSelect
		v-model="field.value"
		v-bind="field.metadata"
		:items="field.items"
		@change="emitChangeEvent(field)"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FieldComponent from '../mixins/fieldComponent';

	/** Form field to select a value from a list */
	@Component
	export default class SelectField extends FieldComponent {}
</script>
