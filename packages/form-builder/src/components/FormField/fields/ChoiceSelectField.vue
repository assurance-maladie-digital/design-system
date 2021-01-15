<template>
	<VSelect
		v-bind="options"
		:value="choiceFieldValue"
		:items="items"
		:multiple="multiple"
		:type="undefined"
		class="vd-form-input"
		@change="emitChangeEvent($event)"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { ChoiceComponent } from '../mixins/choiceComponent';

	const MixinsDeclaration = mixins(ChoiceComponent);

	/** Form field to select a value from a list */
	@Component
	export default class ChoiceSelectField extends MixinsDeclaration {}
</script>
