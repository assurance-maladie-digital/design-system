import { defineComponent } from "vue";
import { DateLogic } from "./dateLogic";

export const MaskValue = defineComponent({
	mixins: [DateLogic],
	props: {
		mask: {
			type: [String, Boolean],
			default: undefined,
		},
	},
	computed: {
		maskValue(): {mask: string} | undefined {
			if (this.mask === false) {
				return;
			}

			if (typeof this.mask === "string") {
				return { mask: this.mask };
			}

			return {
				mask: this.dateFormat.replace(/[a-z]/gim, "#")
			};
		},
	},
});
