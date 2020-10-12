import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import { Options } from '../customizable';

import { isWeekend } from '../../functions/validation/isWeekend';
import { isDateInRange } from '../../functions/validation/isDateInRange';

type Events = boolean | string | string[];
type EventsFunction = (date: string) => Events;

const Props = Vue.extend({
	props: {
		/** Show weekends in calendar */
		showWeekends: {
			type: Boolean,
			default: false
		},
		/** The start date of the range */
		startDate: {
			type: String,
			default: ''
		}
	}
});

const MixinsDeclaration = mixins(Props);

/** Add event handling: weekends and ranges */
@Component
export class Eventable extends MixinsDeclaration {
	// Mixin computed data
	options!: Options;
	/** DatePicker.date */
	date!: string;

	/**
	 * Function event for VCalendar event prop
	 *
	 * @param {string} date Date with YYYY-MM-DD format
	 */
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
			// Change color depending on theme
			const weekEndColor = this.$vuetify.theme.dark ? 'grey darken-1' : 'grey lighten-1';

			// Return a string or false (no event)
			return isWeekend(date) ? `vd-custom-event ${weekEndColor}` : false;
		}

		// By default, return false
		return false;
	}
}
