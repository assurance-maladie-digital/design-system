import Vue from 'vue';
import Component from 'vue-class-component';

import { Options } from '@cnamts/vue-dot/src/mixins/customizable';

import merge from 'deepmerge';

/** Merge default options (eg. menu position fix) with fieldOptions */
@Component
export class DatePickerOptions extends Vue {
	/**
	 * Get Vuetify options object
	 *
	 * @param {Options} fieldOptions The fieldOptions to merge with
	 * @returns {Options} The merged options
	 */
	getVuetifyOptions(fieldOptions?: Options): Options {
		const defaultOptions = {
			menu: {
				nudgeBottom: 55,
				nudgeRight: 0
			}
		};

		if (fieldOptions) {
			return merge(defaultOptions, fieldOptions) as unknown as Options;
		}

		return defaultOptions;
	}
}
