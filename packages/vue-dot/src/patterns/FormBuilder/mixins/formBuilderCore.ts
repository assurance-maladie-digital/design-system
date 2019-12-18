import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import clonedeep from 'lodash.clonedeep';

import LayoutMap from '../../FormLayout/mixins/layoutMap';

import {
	LayoutItem,
	ComputedLayout,
	ComputedForm,
	ComputedField
} from '../types';

const Props = Vue.extend({
	props: {
		/** The form object */
		value: {
			type: [Array, Object],
			required: true
		},
		/** Object describing the layout of the form */
		layout: {
			type: [Array, Object],
			default: undefined
		},
		defaultLayout: {
			type: String,
			default: 'm'
		}
	}
});

const MixinsDeclaration = mixins(Props, LayoutMap);

/** */
@Component<FormBuilderCore>({
	model: {
		prop: 'value',
		event: 'change'
	},
	watch: {
		layout: {
			handler() {
				this.computeLayout();
			},
			immediate: true
		}
	}
})
export default class FormBuilderCore extends MixinsDeclaration {
	value!: ComputedForm;

	computedLayout = {} as ComputedLayout;

	formUpdated(field: ComputedField) {
		const form = clonedeep(this.value);

		form[field.name].value = field.value;

		this.$nextTick(() => {
			this.$emit('change', form);
		});
	}

	computeLayout() {
		let layout = this.layout ? clonedeep(this.layout) : this.getDefaultLayout();

		layout.forEach((layoutItem: LayoutItem, index: number) => {
			layout = this.computeFields(layout, layoutItem.fields, index);
		});

		this.computedLayout = layout;
	}

	computeFields(layout: any[], fields: string[], index: number) {
		if (!fields.length) {
			return;
		}

		fields.forEach((field: string, fieldIndex: number) => {
			const computedField = {
				...this.value[field],
				name: field
			};

			layout[index].fields[fieldIndex] = computedField;
		});

		return layout;
	}

	getDefaultLayout() {
		const formKeys = Object.keys(this.value);

		const defaultLayout = [];

		const fieldsNumber = this.getLayout(this.defaultLayout).fieldsNumber;

		for (let index = 0; index < formKeys.length; index += fieldsNumber) {
			const layoutItem = {
				type: this.defaultLayout,
				fields: this.getFieldNames(formKeys, fieldsNumber, index)
			};

			defaultLayout.push(layoutItem);
		}

		return defaultLayout;
	}

	getFieldNames(formKeys: string[], fieldsNumber: number, index: number) {
		const fieldsCount = index + fieldsNumber;

		const fields = formKeys.slice(index, fieldsCount);

		return fields;
	}
}
