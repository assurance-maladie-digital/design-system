import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { Form } from '../types';
import { Fields } from '../../FormFieldList/types';

const Props = Vue.extend({
	props: {
		/** The form object */
		form: {
			type: Object as PropType<Form>,
			required: true
		}
	}
});

const MixinsDeclaration = mixins(Props);

/** Handle main logic of the FormBuilder */
@Component<FormBuilderCore>({
	model: {
		prop: 'form',
		event: 'change'
	}
})
export class FormBuilderCore extends MixinsDeclaration {
	/**
	 * When the form is updated, emit a
	 * change event with updated form
	 * Also emit 'refresh' event if the field is dynamic
	 *
	 * @param {Fields} fields The updated fields with new value
	 * @param {string} sectionName The name of the section
	 * @returns {void}
	 */
	sectionUpdated(fields: Fields, sectionName: string): void {
		const form = { ...this.form };
		form[sectionName].questions = fields;

		this.$nextTick(() => {
			this.$emit('change', form);
		});
	}
}
