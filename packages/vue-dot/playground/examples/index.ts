import Vue, { VueConstructor } from 'vue';

import CopyBtnEx from './CopyBtnEx.vue';
import DataListEx from './DataListEx.vue';
import DatePickerEx from './DatePickerEx.vue';
import LangBtnEx from './LangBtnEx.vue';
import CustomIconEx from './CustomIconEx.vue';
import DebounceEx from './DebounceEx.vue';
import FileListEx from './FileListEx.vue';
import FileUploadEx from './FileUploadEx.vue';
import FormFieldEx from './FormFieldEx.vue';
import FormBuilderEx from './FormBuilderEx.vue';
import NotificationEx from './NotificationEx.vue';
import PaginatedTableEx from './PaginatedTableEx.vue';
import LayoutQuestionnaireEx from './LayoutQuestionnaireEx.vue';
import RulesEx from './RulesEx.vue';
import SubHeaderEx from './SubHeaderEx.vue';
import UploadWorkflowEx from './UploadWorkflowEx.vue';

interface Components {
	[name: string]: VueConstructor;
}

const components: Components = {
	CopyBtnEx,
	DataListEx,
	DatePickerEx,
	LangBtnEx,
	CustomIconEx,
	DebounceEx,
	FileListEx,
	FileUploadEx,
	FormFieldEx,
	FormBuilderEx,
	NotificationEx,
	PaginatedTableEx,
	LayoutQuestionnaireEx,
	RulesEx,
	SubHeaderEx,
	UploadWorkflowEx
};

/** Globally register all components */
Object.keys(components).forEach((name: string) => {
	Vue.component(name, components[name]);
});
