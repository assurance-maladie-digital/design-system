<template>
	<VSelect
		v-bind="field.metadata"
		:value="field.value"
		:items="field.items"
		class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	/** Form field to select a value from a list */
	@Component
	export default class SelectField extends FieldComponent {}
</script>
