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

	/**
	 * Update the v-model by emitting 'change' event
	 *
	 * @param {FieldValue} value The updated field
	 * @returns {void}
	 */
	emitChangeEvent(value: FieldValue): void {
		const fieldOptions = this.fieldOptions ? this.clearErrorMessages(deepCopy(this.fieldOptions)) : undefined;

		const updatedField = {
			...this.field,
			fieldOptions,
			value
		};

		// Emit in next tick to respect event order
		this.$nextTick(() => {
			this.$emit('change', updatedField);
		});
	}

	clearErrorMessages(fieldOptions: FieldOptions): FieldOptions {
		return deepRemoveKeys(fieldOptions, 'errorMessages');
	}
}
