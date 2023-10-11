import { defineComponent } from "vue";

const Props = {
	props: {
		mask: {
			type: [String, Boolean],
			default: undefined,
		},
	},
};

export const MaskValue = defineComponent({
	props: {
		...Props.props,
	},
	data() {
		return {
			// DatePicker mixin
			dateFormat: '',
		};
	},
	computed: {
		maskValue(): string | undefined {
			if (this.mask === false) {
				return;
			}

			if (typeof this.mask === 'string') {
				return this.mask;
			}

			return this.dateFormat.replace(/[a-z]/gmi, '#');
		}
	}
});
