import { VueConstructor } from 'vue';

import CopyBtn from './CopyBtn.vue';
import CustomIcon from './CustomIcon.vue';
import DataList from './DataList.vue';
import DatePicker from './DatePicker.vue';
import FileUpload from './FileUpload.vue';
import LangBtn from './LangBtn.vue';
import NotificationBar from './NotificationBar.vue';
import PaginatedTable from './PaginatedTable.vue';

interface Components {
	[name: string]: VueConstructor;
}

const components: Components = {
	CopyBtn,
	CustomIcon,
	DataList,
	DatePicker,
	FileUpload,
	LangBtn,
	NotificationBar,
	PaginatedTable
};

/**
 * Globally register all components
*/
export default (Vue: VueConstructor) => {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
};
