<script lang="ts">
import { defineComponent } from "vue";

import RangeField from '@/patterns/RangeField';

import { FieldComponent } from '../mixins/fieldComponent';

export default defineComponent({
	components: {
		RangeField,
	},
	emits: ["change"],
	mixins: [FieldComponent],
});
</script>

<template>
	<RangeField
		v-bind="field.fieldOptions"
		:min="field.min"
		:max="field.max"
		:model-value="field.value"
		@change="emitChangeEvent"
	/>
</template>
