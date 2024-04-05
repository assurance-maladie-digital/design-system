import dayjs from "dayjs";
import { defineComponent } from "vue";

import { INTERNAL_FORMAT } from "./dateLogic";

export const Birthdate = defineComponent({
	props: {
		birthdate: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			activePicker: null as string | null,
			max: this.birthdate ? dayjs().format(INTERNAL_FORMAT) : null,
			min: this.birthdate ? "1900-01-01" : null,
		};
	},
	watch: {
		menuOpen(value: boolean): void {
			if (this.birthdate && value) {
				this.setActivePicker();
			}
		},
	},
	methods: {
		setActivePicker(): void {
			this.activePicker = "year";
		},
		changePicker(): void {
			if(this.birthdate) this.activePicker="months";
		}
	},
});
