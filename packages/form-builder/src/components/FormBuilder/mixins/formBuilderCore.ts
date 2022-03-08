import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { Form } from '../types';
import { Fields } from '../../FormFieldList/types';

const Props = Vue.extend({
	props: {
		form: {
			type: Object as PropType<Form>,
			required: true
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component<FormBuilderCore>({
	model: {
		prop: 'form',
		event: 'change'
	}
})
export class FormBuilderCore extends MixinsDeclaration {
	sectionUpdated(fields: Fields, sectionName: string): void {
		const form = { ...this.form };
		form[sectionName].questions = fields;

		this.$nextTick(() => {
			this.$emit('change', form);
		});
	}
}
