import Vue from 'vue';
import Component from 'vue-class-component';

import { ILayoutMap } from '../types';

/** */
@Component
export default class LayoutMap extends Vue {
	// Don't forget to update layoutEnum
	layoutMap: ILayoutMap = {
		Question: {
			component: 'LayoutQuestion',
			numberOfFields: 1
		},
		Medium: {
			component: 'LayoutM',
			numberOfFields: 1
		},
		Medium_Medium: {
			component: 'LayoutMM',
			numberOfFields: 2
		}
	};

	getLayout(layoutName: string) {
		return this.layoutMap[layoutName];
	}
}
