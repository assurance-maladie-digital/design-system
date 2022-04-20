import dayjs from 'dayjs';
import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import { INTERNAL_FORMAT } from './dateLogic';

const Props = Vue.extend({
	props: {
		birthdate: {
			type: Boolean,
			default: false
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component<Birthdate>({
	watch: {
		menu(value: boolean): void {
			if (this.birthdate && value) {
				this.setActivePicker();
			}
		}
	}
})
export class Birthdate extends MixinsDeclaration {
	activePicker: string | null = null;

	max = this.birthdate ? dayjs().format(INTERNAL_FORMAT) : null;

	min = this.birthdate ? '1900-01-01' : null;

	/** @see https://vuetifyjs.com/en/components/date-pickers#date-pickers-birthday-picker */
	setActivePicker(): void {
		setTimeout(() => {
			this.activePicker = 'YEAR';
		});
	}
}
