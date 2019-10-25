import Vue from 'vue';
import Component from 'vue-class-component';

import { Options } from '../customizable';

import isWeekEnd from '../../functions/isWeekEnd';
import isDateInRange from '../../functions/isDateInRange';

const Props = Vue.extend({
	props: {
		/** Show week-ends in calendar */
		showWeekEnds: {
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

/** Add event handling: week-ends and ranges */
@Component
export default class Eventable extends Props {
	// Mixin computed data
	options!: Options;
	/** DatePicker.date */
	date!: string;

	/**
	 * Function event for VCalendar event prop
	 *
	 * @param {string} date Date with YYYY-MM-DD format
	 */
	calendarEvents(date: string) {
		/** Events prop from mixin */
		const userEvents = this.options.datePicker ? this.options.datePicker.events : undefined;

		// If the user set events, override default behavior
		if (userEvents) {
			// If it's a function, excute it with date parameter
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

		if (this.showWeekEnds) {
			// Chage color depending on theme
			const weekEndColor = this.$vuetify.theme.dark ? 'grey darken-1' : 'grey lighten-1';

			// Return a string or false (no event)
			return isWeekEnd(date) ? `vd-custom-event ${weekEndColor}` : false;
		}

		// By default, return false
		return false;
	}
}
