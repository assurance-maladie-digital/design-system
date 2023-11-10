<script lang="ts">
import { defineComponent } from "vue";

import { FieldComponent } from '../mixins/fieldComponent';

import { vMaska } from "maska";

export default defineComponent({
	mixins: [FieldComponent],
	directives: { maska: vMaska },
	emits: ['change'],
	computed: {
		mask(): string {
			return this.field.fieldOptions?.mask as unknown as string || '';
		}
	}
});
</script>

<template>
	<VTextField
		v-maska:[mask]
		v-bind="field.fieldOptions"
		:model-value="field.value"
		class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>
