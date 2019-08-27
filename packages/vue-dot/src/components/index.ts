import { VueConstructor } from 'vue';

import CopyBtn from './CopyBtn.vue';
import CustomIcon from './CustomIcon.vue';
import DataList from './DataList.vue';
import DatePicker from './DatePicker.vue';
import FileList from './FileList.vue';
import FileUpload from './FileUpload.vue';
import LangBtn from './LangBtn.vue';
import NotificationBar from './NotificationBar.vue';
import PaginatedTable from './PaginatedTable.vue';
import UploadWorkflow from './UploadWorkflow.vue';

interface Components {
	[name: string]: VueConstructor;
}

const components: Components = {
	CopyBtn,
	CustomIcon,
	DataList,
	DatePicker,
	FileList,
	FileUpload,
	LangBtn,
	NotificationBar,
	PaginatedTable,
	UploadWorkflow
};

/** Globally register all components */
export default (Vue: VueConstructor) => {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
};
