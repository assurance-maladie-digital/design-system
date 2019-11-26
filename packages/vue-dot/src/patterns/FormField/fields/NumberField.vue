<template>
	<FormFieldCtn v-bind="$props">
		<template #content="{ emitChangeEvent }">
			<VTextField
				v-model="field.value"
				v-mask="field.mask"
				:label="field.label"
				@change="emitChangeEvent(field)"
			/>
		</template>
	</FormFieldCtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FieldProp from '../mixins/fieldProp';

	/** Form field to enter a number (requires a mask) */
	@Component
	export default class NumberField extends FieldProp {}
</script>
