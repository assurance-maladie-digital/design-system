<template>
	<FormFieldCtn v-bind="$props">
		<template #content="{ emitChangeEvent }">
			<VSelect
				v-model="field.value"
				:label="field.label"
				:items="field.items"
				@change="emitChangeEvent(field)"
			/>
		</template>
	</FormFieldCtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FieldProp from '../mixins/fieldProp';

	/** Form field to select a value from a list */
	@Component
	export default class SelectField extends FieldProp {}
</script>
