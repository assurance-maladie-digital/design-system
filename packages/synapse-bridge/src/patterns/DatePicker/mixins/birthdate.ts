import dayjs from "dayjs";
import { defineComponent } from "vue";

import { INTERNAL_FORMAT } from "./dateLogic";

const Props = {
	props: {
		birthdate: {
			type: Boolean,
			default: false,
		},
	},
};

export const Birthdate = defineComponent({
	props: {
		...Props.props,
	},
	data() {
		return {
			activePicker: null as string | null,
			max: this.birthdate ? dayjs().format(INTERNAL_FORMAT) : null,
			min: this.birthdate ? "1900-01-01" : null,
		};
	},
	watch: {
		menu(value: boolean): void {
			if (this.birthdate && value) {
				this.setActivePicker();
			}
		},
	},
	methods: {
		/** @see https://vuetifyjs.com/en/components/date-pickers#date-pickers-birthday-picker */
		setActivePicker(): void {
			setTimeout(() => {
				this.activePicker = "YEAR";
			});
		},
	},
});
