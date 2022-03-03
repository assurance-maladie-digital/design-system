import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import { Options } from '../customizable';

import { isWeekend } from '../../functions/validation/isWeekend';
import { isDateInRange } from '../../functions/validation/isDateInRange';

type Events = boolean | string | string[];
type EventsFunction = (date: string) => Events;

const Props = Vue.extend({
	props: {
		showWeekends: {
			type: Boolean,
			default: false
		},
		startDate: {
			type: String,
			default: ''
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class Eventable extends MixinsDeclaration {
	// Customizable mixin
	options!: Options;
	// DatePicker mixin
	date!: string;

	calendarEvents(date: string): Events {
		const userEvents = this.options.datePicker?.events as EventsFunction | null;

		if (userEvents) {
			return typeof userEvents === 'function' ? userEvents(date) : userEvents;
		}

		const dateInRange = isDateInRange(date, this.startDate, this.date);

		if (this.startDate && this.date && dateInRange) {
			return 'vd-custom-event accent';
		}

		if (this.showWeekends) {
			const weekEndColor = this.$vuetify.theme.dark ? 'grey darken-1' : 'grey lighten-1';

			return isWeekend(date) ? `vd-custom-event ${weekEndColor}` : false;
		}

		return false;
	}
}
