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
		/** Events prop from mixin */
		const userEvents = this.options.datePicker ? this.options.datePicker.events as EventsFunction : undefined;

		// If the user set events, override default behavior
		if (userEvents) {
			// If it's a function, execute it with date parameter
			if (typeof userEvents === 'function') {
				return userEvents(date);
			}

			// Else, simply return the value
			return userEvents;
		}

		// If there is a start date & a date is selected,
		// add events to date in this range
		if (this.startDate && this.date) {
			const inRange = isDateInRange(date, this.startDate, this.date);

			if (inRange) {
				return 'vd-custom-event accent';
			}
		}

		if (this.showWeekends) {
			const weekEndColor = this.$vuetify.theme.dark ? 'grey darken-1' : 'grey lighten-1';

			return isWeekend(date) ? `vd-custom-event ${weekEndColor}` : false;
		}

		return false;
	}
}
