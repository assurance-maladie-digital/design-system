import { defineComponent } from "vue";
import type { PropType } from "vue";

import { Form } from "../types";
import { Fields } from "../../FormFieldList/types";

export default defineComponent({
	props: {
		form: {
			type: Object as PropType<Form>,
			required: true,
		},
	},
	emits: ["change"],
	methods: {
		sectionUpdated(fields: Fields, sectionName: string): void {
			const form = { ...this.form };
			form[sectionName].questions = fields;

			this.$nextTick(() => {
				this.$emit("change", form);
			});
		},
	},
});
