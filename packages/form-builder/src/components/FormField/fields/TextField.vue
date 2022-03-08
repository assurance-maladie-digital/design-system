<template>
	<VTextField
		v-bind="field.fieldOptions"
		:value="field.value"
		class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	const MixinsDeclaration = mixins(FieldComponent);

	@Component
	export default class TextField extends MixinsDeclaration {}
</script>
