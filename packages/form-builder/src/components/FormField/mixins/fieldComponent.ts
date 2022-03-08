import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { Field, FieldValue, FieldOptions } from '../types';

import { deepCopy } from '@cnamts/vue-dot/src/helpers/deepCopy';
import { deepRemoveKeys } from '@cnamts/vue-dot/src/helpers/deepRemoveKeys';

const Props = Vue.extend({
	props: {
		field: {
			type: Object as PropType<Field>,
			required: true
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component({
	model: {
		prop: 'field',
		event: 'change'
	}
})
export class FieldComponent extends MixinsDeclaration {
	get fieldOptions(): FieldOptions | undefined {
		return this.field.fieldOptions;
	}

	async emitChangeEvent(value: FieldValue): Promise<void> {
		const fieldOptions = this.fieldOptions ? this.clearErrorMessages(deepCopy(this.fieldOptions)) : undefined;

		const updatedField = {
			...this.field,
			fieldOptions,
			value
		};

		await this.$nextTick(); // Await to respect event order

		this.$emit('change', updatedField);
	}

	clearErrorMessages(fieldOptions: FieldOptions): FieldOptions {
		return deepRemoveKeys(fieldOptions, 'errorMessages');
	}
}
