import { defineComponent } from "vue";
import type { PropType } from "vue";

import { ValidationRule } from "@/rules/types";

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
			messages: [] as string[],
		};
	},
	methods: {
		// dd/mm/yyyy
		validate(date: string): void {
			this.messages = [];
			this.warningRules.forEach((rule) => {
				const result = rule(date);

				if (typeof result === 'string') {
					this.messages.push(result);
				}
			});
		},
	},
	template: `<div></div>`,
});
