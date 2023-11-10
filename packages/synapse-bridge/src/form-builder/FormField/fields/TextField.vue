<script lang="ts">
import { defineComponent } from "vue";

import FieldComponent from '../mixins/fieldComponent';

export default defineComponent({
	emits: ['update:modelValue'],
	mixins: [FieldComponent],
});
</script>

<template>
	<VTextField
		v-bind="field.fieldOptions as any"
		:model-value="field.value"
		class="vd-form-input"
		:color="field.fieldOptions?.color ?? 'primary'"
		@update:modelValue="emitChangeEvent"
	/>
</template>
