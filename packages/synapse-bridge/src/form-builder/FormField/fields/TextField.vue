<script lang="ts">
import { defineComponent } from "vue";

import { FieldComponent } from '../mixins/fieldComponent';

export default defineComponent({
	emits: ['change'],
	mixins: [FieldComponent],
});
</script>

<template>
	<VTextField
		v-bind="field.fieldOptions"
		:model-value="field.value"
		class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>
