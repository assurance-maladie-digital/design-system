import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import FormSection from '../../FormSection/FormSection.vue';
import { FieldGroup } from './../../FormSection/types.d';

import FormSectionGroup from '../../FormSectionGroup/FormSectionGroup.vue';
import { SectionGroup } from './../../FormSectionGroup/types.d';

const Props = Vue.extend({
	props: {
		/** The form group object */
		sectionGroup: {
			type: Object as PropType<SectionGroup>,
			default: null
		},
		/** The field group object */
		fieldGroup: {
			type: Object as PropType<FieldGroup>,
			default: null
		}
	}
});

/** Handle main logic of the FormBuilder */
@Component<FormBuilderCore>({
	model: {
		prop: 'form',
		event: 'change'
	},
	components: {
		FormSection,
		FormSectionGroup
	}
})
export class FormBuilderCore extends Props {
}

