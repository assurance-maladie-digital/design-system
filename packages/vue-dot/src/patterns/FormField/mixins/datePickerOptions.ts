import Vue from 'vue';
import Component from 'vue-class-component';

import { Options } from '../../../mixins/customizable';

/** Merge default options (eg. menu position fix) with metadata */
@Component
export default class DatePickerOptions extends Vue {
	/**
	 * Get Vuetify options object
	 *
	 * @param {object} metadata The metadata to merge with
	 * @returns {Options} The merged options
	 */
	getVuetifyOptions(metadata: object): Options {
		const defaultOptions = {
			menu: {
				nudgeBottom: 55,
				nudgeRight: 0
			}
		};

		return {
			...defaultOptions,
			...metadata
		};
	}
}
