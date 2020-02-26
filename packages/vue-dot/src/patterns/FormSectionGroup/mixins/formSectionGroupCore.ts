import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import { SectionGroup } from '../types';

import FormSection from '../../FormSection';
import { Form, Section } from './../../FormSection/types';

import { getFormValues } from '../../../functions/getFormValues';
import { FormValues } from '../../../functions/getFormValues/types';

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

			const sectionGroupvalues = this.getValues(sectionGroup);

			this.$emit('change:values', sectionGroupvalues);
		});
	}

	/**
	 * Return the values of the sectionGroup in params
	 *
	 * @param {SectionGroup} sectionGroup The sectionGroup to get value from
	 * @returns {FormValues} The values of the sectionGroup
	 */
	public getValues(sectionGroup: SectionGroup): FormValues {
		let sectionGroupValues: FormValues = {};
		for (const section of Object.values(sectionGroup)) {
			const sectionValues = getFormValues(section.questions);
			sectionGroupValues = { ...sectionGroupValues, ...sectionValues };
		}

		return sectionGroupValues;
	}
}

