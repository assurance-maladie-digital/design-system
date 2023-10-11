import { defineComponent } from "vue";
import type { PropType } from "vue";

import { ValidationRule } from "../../rules/types";

const Props = {
	props: {
		warningRules: {
			type: Array as PropType<ValidationRule[]>,
			default: () => [],
		},
	},
};

export const WarningRules = defineComponent({
	props: {
		...Props.props,
	},
	data() {
		return {
			successMessages: [] as string[],
		};
	},
	methods: {
		validate(value: string): void {
		this.successMessages = [];

		this.warningRules.forEach((rule) => {
			const result = rule(value);

			if (typeof result === 'string') {
				this.successMessages.push(result);
			}
		});
		},
	},
});
