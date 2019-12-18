import Vue from 'vue';
import Component from 'vue-class-component';

import { ILayoutMap } from '../types';

/** */
@Component
export default class LayoutMap extends Vue {
	layoutMap: ILayoutMap = {
		question: {
			component: 'LayoutQuestion',
			fieldsNumber: 1
		},
		m: {
			component: 'LayoutM',
			fieldsNumber: 1
		},
		mm: {
			component: 'LayoutMM',
			fieldsNumber: 2
		}
	};

	getLayout(layoutName: string) {
		return this.layoutMap[layoutName];
	}
}
