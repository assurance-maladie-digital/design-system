import dayjs from 'dayjs';
import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import { INTERNAL_FORMAT } from './dateLogic';

const Props = Vue.extend({
	props: {
		/** Enables birthdate mode */
		birthdate: {
			type: Boolean,
			default: false
		}
	}
});

const MixinsDeclaration = mixins(Props);

/** Add birthdate prop: select year, month then day */
@Component<Birthdate>({
	watch: {
		menu(value: boolean): void {
			// If birthdate mode is activated
			if (this.birthdate && value) {
				this.setActivePicker();
			}
		}
	}
})
export class Birthdate extends MixinsDeclaration {
	activePicker: string | null = null;

	/** If birthdate is enabled, max is the current date */
	max = this.birthdate ? dayjs().format(INTERNAL_FORMAT) : null;

	/** If birthdate is enabled, min is 01/01/1900 */
	min = this.birthdate ? '1900-01-01' : null;

	/**
	 * Set active picker on VDatePicker
	 * See https://vuetifyjs.com/en/components/date-pickers#date-pickers-birthday-picker
	 */
	setActivePicker(): void {
		setTimeout(() => {
			// Set the active picker to year
			this.activePicker = 'YEAR';
		});
	}
}
