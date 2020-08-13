import Vue from 'vue';

import { registerComponents } from '@cnamts/vue-dot/src/helpers/registerComponents';

import FormBuilderEx from './FormBuilderEx.vue';
import FormFieldEx from './FormFieldEx.vue';
import FormFieldListEx from './FormFieldListEx.vue';
import QuestionnaireEx from './QuestionnaireEx.vue';

const components = {
	FormBuilderEx,
	FormFieldEx,
	FormFieldListEx,
	QuestionnaireEx
};

registerComponents(Vue, components);
