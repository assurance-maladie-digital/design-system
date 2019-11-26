<template>
	<FormFieldCtn v-bind="$props">
		<template #content="{ emitChangeEvent }">
			<VTextField
				v-model="field.value"
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

	/** Form field to enter text */
	@Component
	export default class TextField extends FieldProp {}
</script>
