import { defineComponent } from "vue";

export const MaskValue = defineComponent({
	props: {
		mask: {
			type: [String, Boolean],
			default: undefined,
		},
	},
	computed: {
		maskValue(): string | undefined {
			if (this.mask === false) {
				return;
			}

			if (typeof this.mask === "string") {
				return this.mask;
			}

			return this.dateFormat.replace(/[a-z]/gim, "#");
		},
	},
});
