import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import FormSectionGroup from '../../FormSectionGroup/FormSectionGroup.vue';
import { SectionGroup } from './../../FormSectionGroup/types.d';

const Props = Vue.extend({
	props: {
		/** The form group object */
		sectionGroup: {
			type: Object as PropType<SectionGroup>,
			default: null
		}
	}
});

/** Handle main logic of the FormBuilder */
@Component<FormBuilderCore>({
	model: {
		prop: 'sectionGroup',
		event: 'change'
	},
	components: {
		FormSectionGroup
	}
})
export class FormBuilderCore extends Props {}

