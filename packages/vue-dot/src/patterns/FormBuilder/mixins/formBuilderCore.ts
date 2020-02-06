import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import LayoutMap from '../../FormLayout/mixins/layoutMap';
import { Layouts } from '../../FormLayout/layoutsEnum';

import { deepCopy } from '../../../helpers/deepCopy';

import {
	Form,
	Layout,
	LayoutItem,
	ComputedLayout,
	ComputedField,
	ComputedLayoutItem
} from '../types';

const Props = Vue.extend({
	props: {
		/** The form object */
		form: {
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
		prop: 'form',
		event: 'change'
	},
	// Each time the value or the layout are updated,
	// we need to compute the layout again in order
	// to update the values in the fields
	watch: {
		layout() {
			this.computedLayout = this.computeLayout();
		},
		form: {
			handler() {
				this.computedLayout = this.computeLayout();
			},
			immediate: true
		}
	}
})
export class FormBuilderCore extends MixinsDeclaration {
	/** The layout object containing the fields */
	computedLayout = {} as ComputedLayout | null;

	/**
	 * When the form is updated, emit a
	 * change event with updated data
	 * Also emit 'refresh' event if the field is dynamic
	 *
	 * @param {ComputedField} field The updated field with new value
	 * @returns {void}
	 */
	formUpdated(field: ComputedField): void {
		const form = {
			...this.form
		};

		form[field.name].value = field.value;

		this.$nextTick(() => {
			this.$emit('change', form);

			// If the field has the `dynamic` property
			if (field.dynamic) {
				// Also emit 'refresh' event
				this.$emit('refresh');
			}
		});
	}

	computeLayout(): ComputedLayout | null {
		// Clone provided layout or get a default one
		const layout = this.layout ? deepCopy<Layout>(this.layout) : this.getDefaultLayout();

		if (!layout) {
			return null;
		}

		const newLayout: ComputedLayout = [];

		layout.forEach((layoutItem: LayoutItem, index: number) => {
			const newLayoutItem = this.computeFields(layout[index], layoutItem.fields);

			if (newLayoutItem) {
				newLayout.push(newLayoutItem);
			}
		});

		if (!newLayout.length) {
			return null;
		}

		return newLayout;
	}

	computeFields(layoutItem: LayoutItem, fields: string[]): ComputedLayoutItem | null {
		if (!fields.length) {
			return null;
		}

		const newLayout = deepCopy<ComputedLayoutItem>(layoutItem);

		fields.forEach((field: string, fieldIndex: number) => {
			const computedField = {
				...this.form[field],
				name: field
			};

			newLayout.fields[fieldIndex] = computedField;
		});

		return newLayout;
	}

	/**
	 * Generate a layout using defaultLayout
	 *
	 * @returns {Layout|null} The generated layout or null
	 * if the defaultLayout doesn't exists
	 */
	getDefaultLayout(): Layout | null {
		const formKeys = Object.keys(this.form);

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
