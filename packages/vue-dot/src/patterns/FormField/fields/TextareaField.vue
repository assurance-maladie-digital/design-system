<template>
	<VTextarea
		v-model="field.value"
		:label="field.label"
		@change="emitChangeEvent(field)"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FieldComponent from '../mixins/fieldComponent';

	/** Form field to enter a long text */
	@Component
	export default class TextareaField extends FieldComponent {}
</script>
