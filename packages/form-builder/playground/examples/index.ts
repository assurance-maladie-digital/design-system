import Vue from 'vue';

import { registerComponents } from '@cnamts/vue-dot/src/helpers/registerComponents';

import FormFieldEx from './FormFieldEx.vue';
import FormBuilderEx from './FormBuilderEx.vue';
import QuestionnaireEx from './QuestionnaireEx.vue';

const components = {
	FormFieldEx,
	FormBuilderEx,
	QuestionnaireEx
};

registerComponents(Vue, components);
