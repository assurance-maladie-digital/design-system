<script lang="ts">
import { defineComponent } from "vue";

import PasswordField from "@/patterns/PasswordField";

import { FieldComponent } from "../mixins/fieldComponent";

export default defineComponent({
	components: {
		PasswordField,
	},
	emits: ["change"],
	mixins: [FieldComponent],
});
</script>

<template>
	<PasswordField
		v-bind="field.fieldOptions"
		:model-value="field.value"
		class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>
