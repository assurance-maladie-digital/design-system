import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import { SectionGroup } from '../types';

import FormSection from '../../FormSection';
import { Form, Section } from './../../FormSection/types';

const Props = Vue.extend({
	props: {
		/** The section group object */
		sectionGroup: {
			type: Object as PropType<SectionGroup>,
			required: true
		}
	}
});

/**
 * FormSectionGroup is a component that displays a list of FormSection
 */
@Component<FormSectionGroupCore>({
	model: {
		prop: 'sectionGroup',
		event: 'change'
	},
	components: {
		FormSection
	}
})
export class FormSectionGroupCore extends Props {
	/**
	 * Emit 'change' and 'change:values' when one of the field in the section in parameter has changed
	 *
	 * @param {Form} form The new field group object updated
	 * @param {Section} section The section id
	 */
	emitSectionGroupUpdated(form: Form, section: Section) {
		const sectionGroup = {
			...this.sectionGroup
		};

		section.questions = form;

		this.$nextTick(() => {
			this.$emit('change', sectionGroup);
		});
	}
}

