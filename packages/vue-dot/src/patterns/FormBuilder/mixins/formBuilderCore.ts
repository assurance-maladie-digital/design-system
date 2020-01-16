import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import clonedeep from 'lodash.clonedeep';

import LayoutMap from '../../FormLayout/mixins/layoutMap';
import { Layouts } from '../../FormLayout/layoutsEnum';

import {
	Layout,
	LayoutItem,
	ComputedLayout,
	ComputedField,
	ComputedLayoutItem
} from '../types';

import { Form } from '../../FormField/types';

const Props = Vue.extend({
	props: {
		/** The form object */
		value: {
			type: Object as PropType<Form>,
			required: true
		},
		/** Object describing the layout of the form */
		layout: {
			type: Array as PropType<Layout>,
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

/** Handle main logic of the FormBuilder */
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
		},
		value: {
			handler() {
				this.computedLayout = this.computeLayout();
			},
			immediate: true
		}
	}
})
export default class FormBuilderCore extends MixinsDeclaration {
	/** The layout object containing the fields */
	computedLayout = {} as ComputedLayout | null;

	formUpdated(field: ComputedField) {
		const form = clonedeep(this.value);

		form[field.name].value = field.value;

		this.$nextTick(() => {
			this.$emit('change', form);
		});
	}

	computeLayout(): ComputedLayout | null {
		const layout = this.layout ? clonedeep(this.layout) : this.getDefaultLayout();

		if (!layout) {
			return null;
		}

		const newLayout: ComputedLayout = [];

		layout.forEach((layoutItem: LayoutItem, index: number) => {
			const newLayoutItem = this.computeFields(layout as Layout, layoutItem.fields, index);

			if (newLayoutItem) {
				newLayout.push(newLayoutItem);
			}
		});

		return newLayout;
	}

	computeFields(layout: Layout, fields: string[], index: number): ComputedLayoutItem | null {
		if (!fields.length) {
			return null;
		}

		const newLayout = {
			...layout
		} as unknown as ComputedLayout;

		fields.forEach((field: string, fieldIndex: number) => {
			const computedField = {
				...this.value[field],
				name: field
			};

			newLayout[index].fields[fieldIndex] = computedField;
		});

		return newLayout[index];
	}

	/**
	 * Generate a layout using defaultLayout
	 *
	 * @returns {Layout|null} The generated layout or null
	 * if the defaultLayout doesn't exists
	 */
	getDefaultLayout(): Layout | null {
		const formKeys = Object.keys(this.value);

		const layout = this.getLayout(this.defaultLayout);

		// If the layout doesn't exists, stop here
		if (!layout) {
			return null;
		}

		const defaultLayout = [];

		const numberOfFields = layout.numberOfFields;

		// Fill the fields array with the corresponding number of fields
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
