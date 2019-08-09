import Vue from 'vue';
import Component from 'vue-class-component';

import { Options } from './customizable';

import isWeekEnd from '../functions/isWeekEnd';

const Props = Vue.extend({
	props: {
		/** Show week-ends in calendar */
		showWeekEnds: {
			type: Boolean,
			default: false
		}
	}
});

/** Add event handling: week-ends and ranges */
@Component
export default class Eventable extends Props {
	// Mixin computed data
	options!: Options;

	/**
	 * Function event for VCalendar event prop
	 *
	 * @param {string} date Date with YYYY-MM-DD format
	 */
	calendarEvents(date: string) {
		/** Events prop from mixin */
		const userEvents = this.options.datePicker.events;

		// If the user set events, override default behavior
		if (userEvents) {
			// If it's a function, excute it with date parameter
			if (typeof userEvents === 'function') {
				return userEvents(date);
			}

			// Else, simply return the value
			return userEvents;
		}

		if (this.showWeekEnds) {
			const weekEndColor = this.$vuetify.theme.dark ? 'grey darken-1' : 'grey lighten-1';
			// Return a string or false (no event)
			return isWeekEnd(date) ? `vd-custom-event ${weekEndColor}` : false;
		}
	}
}
