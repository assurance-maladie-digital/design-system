import Vue, { VueConstructor } from 'vue';

import DataListEx from './DataListEx.vue';
import DatePickerEx from './DatePickerEx.vue';
import LangBtnEx from './LangBtnEx.vue';
import CustomIconEx from './CustomIconEx.vue';
import DebounceEx from './DebounceEx.vue';
import NotificationEx from './NotificationEx.vue';
import PaginatedTableEx from './PaginatedTableEx.vue';

interface Components {
	[name: string]: VueConstructor;
}

const components: Components = {
	DataListEx,
	DatePickerEx,
	LangBtnEx,
	CustomIconEx,
	DebounceEx,
	NotificationEx,
	PaginatedTableEx
};

/**
 * Globally register all components
*/
Object.keys(components).forEach((name: string) => {
	Vue.component(name, components[name]);
});
