<template>
	<component
		:is="fieldType"
		v-bind="field.fieldOptions"
		v-model="field.value"
		@update:model-value="updateFieldValue"
	/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as DsComponents from "./DsComponents.ts";
import * as VuetifyComponents from "./VuetifyComponents.ts";
import fieldTypeMixin from "./mixins/fieldTypeMixin";


export default defineComponent({
	mixins: [fieldTypeMixin],
	components: {
		...DsComponents,
		...VuetifyComponents,
	},
	props: {
		field: {
			type: Object,
			required: true,
			default: () => ({
				type: "VTextField",
				fieldOptions: {},
				value: "",
			}),
		},
	},
	computed: {
	},
	methods: {
		updateFieldValue(newValue: any) {
			this.$emit("update:field", {
				...this.field,
				value: newValue,
			});
			this.$emit('input', newValue);
		},
	},
});
</script>
