import { defineComponent } from "vue";

export const ErrorProp = defineComponent({
	props: {
		error: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		internalErrorProp: {
			get() {
				return this.error;
			},
			set(value: unknown) {
				this.$emit("update:error", value);
			},
		},
	},
	template: `<div></div>`,
});
