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
	import Component, { mixins } from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	const MixinsDeclaration = mixins(FieldComponent);

	/** Form field to select a value from a list */
	@Component
	export default class SelectField extends MixinsDeclaration {}
</script>
