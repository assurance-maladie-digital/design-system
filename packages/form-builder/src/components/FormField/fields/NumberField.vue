<template>
	<VTextField
		v-mask="mask"
		v-bind="field.metadata"
		:value="field.value"
		class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	const MixinsDeclaration = mixins(FieldComponent);

	/** Form field to enter a number (requires a mask) */
	@Component
	export default class NumberField extends MixinsDeclaration {
		get mask(): string {
			return this.field.metadata?.mask as unknown as string || '';
		}
	}
</script>
