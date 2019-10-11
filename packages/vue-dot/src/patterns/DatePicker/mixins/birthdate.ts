import Vue from 'vue';
import Component from 'vue-class-component';

import { Refs } from '../../../types';

const Props = Vue.extend({
	props: {
		/** Enables birthdate mode: select year, month then day */
		birthdate: {
			type: Boolean,
			default: false
		}
	}
});

/** Add event handling: week-ends and ranges */
@Component<Birthdate>({
	watch: {
		// See https://vuetifyjs.com/en/components/date-pickers#date-pickers-birthday-picker
		menu(val) {
			// If birthdate mode is activated
			if (this.birthdate && val) {
				setTimeout(() => {
					// Se the active picker to year
					this.$refs.picker.activePicker = 'YEAR';
				});
			}
		}
	}
})
export default class Birthdate extends Props {
	// Extend $refs
	$refs!: Refs<{
		picker: {
			activePicker: string;
		};
	}>;

	/** If birthdate is enabled, max is the current date */
	max = this.birthdate ? new Date().toISOString().substr(0, 10) : null;
	/** If birthdate is enabled, min is 01/01/1950 */
	min = this.birthdate ? '1950-01-01' : null;
}
