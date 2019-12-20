import Vue from 'vue';
import Component from 'vue-class-component';

import { ILayoutMap, LayoutMapItem } from '../types';

/** List all layouts and provide getLayout() function */
@Component
export default class LayoutMap extends Vue {
	/** List all layouts components and their corresponding data */
	// Don't forget to update layoutEnum
	layoutMap: ILayoutMap = {
		medium: {
			component: 'LayoutM',
			numberOfFields: 1
		},
		medium_medium: {
			component: 'LayoutMM',
			numberOfFields: 2
		},
		question: {
			component: 'LayoutQuestion',
			numberOfFields: 1
		}
	};

	/**
	 * Returns the layout that correspond to the name
	 * passed in argument
	 *
	 * @param {string} layoutName The name of the layout (case insensitive)
	 * @returns {LayoutMapItem} The layout data
	 */
	getLayout(layoutName: string): LayoutMapItem {
		const lowerCaseLayoutName = layoutName.toLowerCase();

		return this.layoutMap[lowerCaseLayoutName];
	}
}
