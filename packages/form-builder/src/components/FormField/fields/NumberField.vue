<template>
	<VTextField
		v-facade="mask"
		v-bind="field.fieldOptions"
		:value="field.value"
		:aria-label="field.value"
		class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	const MixinsDeclaration = mixins(FieldComponent);

	@Component
	export default class NumberField extends MixinsDeclaration {
		get mask(): string {
			return this.field.fieldOptions?.mask as unknown as string || '';
		}
	}
</script>
