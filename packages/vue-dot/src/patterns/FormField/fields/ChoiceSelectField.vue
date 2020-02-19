<template>
	<VSelect
		v-bind="metadata"
		:value="choiceValue"
		:items="items"
		@change="emitChoiceUpdated($event)"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { ChoiceComponent } from '../mixins/choiceComponent';

	/** Form field to select a value from a list */
	@Component
	export default class SelectField extends ChoiceComponent {}
</script>
