import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import clonedeep from 'lodash.clonedeep';

import LayoutMap from '../../FormLayout/mixins/layoutMap';
import { Layouts } from '../../FormLayout/layoutsEnum';

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
		/**
		 * Layout used to generate the default one
		 * when the layout prop isn't provided
		 */
		defaultLayout: {
			type: String,
			default: Layouts.Medium
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
				this.computedLayout = this.computeLayout();
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

	computeLayout(): ComputedLayout {
		let layout = this.layout ? clonedeep(this.layout) : this.getDefaultLayout();

		layout.forEach((layoutItem: LayoutItem, index: number) => {
			layout = this.computeFields(layout, layoutItem.fields, index);
		});

		return layout;
	}

	computeFields(layout: any[], fields: string[], index: number) {
		if (!fields.length) {
			return [];
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

		const numberOfFields = this.getLayout(this.defaultLayout).numberOfFields;

		for (let index = 0; index < formKeys.length; index += numberOfFields) {
			const fields = formKeys.slice(index, index + numberOfFields);

			const layoutItem = {
				type: this.defaultLayout,
				fields
			};

			defaultLayout.push(layoutItem);
		}

		return defaultLayout;
	}
}
