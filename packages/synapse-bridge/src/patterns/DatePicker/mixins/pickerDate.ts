import { defineComponent } from "vue";

const BIRTHDATE_DEFAULT_VALUE = "1990-01";

export const PickerDate = defineComponent({
	props: {
		pickerDate: {
			type: String,
			default: undefined,
		},
	},
	data() {
		return {
			// Birthdate mixin
			birthdate: false,
			bufferValue: null as string | null,
		};
	},
	computed: {
		internalPickerDate: {
			get() {
				const hasUserValue = this.bufferValue || this.pickerDate;

				if (this.birthdate && !hasUserValue) {
					return BIRTHDATE_DEFAULT_VALUE;
				}

				return this.pickerDate;
			},

			set(value: string) {
				// Store the value in a buffer to update the
				// value internally if sync prop is not used
				this.bufferValue = value;
				this.$emit("update:picker-date", value);
			},
		},
	},
});
