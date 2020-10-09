<template>
	<VTextarea
		v-bind="field.fieldOptions"
		:value="field.value"
		class="vd-form-input-xl"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	const MixinsDeclaration = mixins(FieldComponent);

	/** Form field to enter a long text */
	@Component
	export default class TextareaField extends MixinsDeclaration {}
</script>
