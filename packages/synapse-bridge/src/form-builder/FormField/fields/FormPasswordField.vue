<script lang="ts">
import { defineComponent } from "vue";

import PasswordField from "@/patterns/PasswordField";

import FieldComponent from "../mixins/fieldComponent";

export default defineComponent({
	components: {
		PasswordField,
	},
	emits: ["update:modelValue"],
	mixins: [FieldComponent],
});
</script>

<template>
	<PasswordField
		v-bind="field.fieldOptions"
		:model-value="String(field.value)"
		class="vd-form-input"
		:color="field.fieldOptions?.color ?? 'primary'"
		@update:modelValue="emitChangeEvent"
	/>
</template>
