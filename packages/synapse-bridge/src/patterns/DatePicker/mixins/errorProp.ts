import { defineComponent } from "vue";

const Props = {
	props: {
		error: {
			type: Boolean,
			default: false,
		},
	},
};

export const ErrorProp = defineComponent({
	props: {
		...Props.props,
	},
	computed: {
		internalErrorProp: {
			get() {
				return this.error;
			},
			set(value) {
				this.$emit('update:error', value);
			}
		}
	}
});
