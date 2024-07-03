<script lang="ts">
import { defineComponent } from "vue";

import FieldComponent from '../mixins/fieldComponent';

export default defineComponent({
	emits: ['update:modelValue'],
	mixins: [FieldComponent],
});
</script>

<template>
	<VTextarea
		v-bind="field.fieldOptions as any || {}"
		:model-value="field.value"
		class="vd-form-input-xl mt-4"
		:color="field.fieldOptions?.color ?? 'primary'"
		@update:modelValue="emitChangeEvent"
	/>
</template>
