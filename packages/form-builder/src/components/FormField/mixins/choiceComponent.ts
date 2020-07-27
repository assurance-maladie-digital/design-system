import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { ChoiceFieldValue, FieldItem, FieldOptions, FieldItemValue } from '../types';

const Props = Vue.extend({
	props: {
		/** The choice field value to display */
		value: {
			type: [Array, Number, String] as PropType<ChoiceFieldValue>,
			default: null
		},
		options: {
			type: Object as PropType<FieldOptions>,
			default: null
		},
		multiple: {
			type: Boolean,
			default: false
		},
		items: {
			type: Array as PropType<FieldItem[]>,
			required: true
		}
	}
});

const MixinsDeclaration = mixins(Props);

/** Mixin to control the item selection */
@Component<ChoiceComponent>({
	watch: {
		// Listen the current field value for the component
		value: {
			handler(value: ChoiceFieldValue): void {
				if (value !== null && value !== undefined) {
					/** In multiple mode, put the value in an array if it wasn't already */
					if (this.multiple && !Array.isArray(value)) {
						this.choiceFieldValue = [value];
					} else {
						this.choiceFieldValue = value;
					}
				} else {
					// Reset the choice value
					this.choiceFieldValue = this.multiple ? [] : null;
				}
			},
			immediate: true,
			deep: true
		}
	}
})
export class ChoiceComponent extends MixinsDeclaration {
	choiceFieldValue: ChoiceFieldValue | null = this.multiple ? [] : null;

	/**
	 * Toggle the item
	 *
	 * @param {FieldItem} item The selected item
	 * @returns {void}
	 */
	toggleItem(item: FieldItem): void {
		const active: boolean = this.isSelected(item.value);

		let newChoiceValue: ChoiceFieldValue;

		// Set the new value in simple mode
		if (!this.multiple) {
			newChoiceValue = active ? null : item.value;
		} else {
			newChoiceValue = [
				...this.choiceFieldValue as FieldItemValue[]
			];

			if (active && Array.isArray(this.choiceFieldValue)) {
				// Unselect the item
				const valueIndex = this.choiceFieldValue.indexOf(item.value);

				newChoiceValue.splice(valueIndex, 1);
			} else {
				// Can't select a null value in multiple mode
				if (item.value === undefined || item.value === null) {
					return;
				}

				const isAlone = Boolean(item.alone);

				// If item alone, unselect all other
				if (isAlone) {
					newChoiceValue = [item.value];
				} else {
					// Else unselect all alone items
					let index = newChoiceValue.length - 1;

					while (index >= 0) {
						const valueSelected = (newChoiceValue as FieldItemValue[])[index];

						// Search if the item is alone
						const isItemSelectedAlone = this.items.find((element) => {
							return element.value === valueSelected && element.alone;
						});

						if (isItemSelectedAlone) {
							// Delete alone item
							newChoiceValue.splice(index, 1);
						}

						index -= 1;
					}

					// Add the item to the selection
					newChoiceValue.push(item.value);
				}
			}
		}

		this.choiceFieldValue = newChoiceValue;

		this.emitChangeEvent(this.choiceFieldValue);
	}

	emitChangeEvent(newValue: ChoiceFieldValue): void {
		this.$emit('change', newValue);
	}

	/**
	 * Check if the button is selected
	 *
	 * @param {FieldItemValue} value The button value to test if it is selected
	 * @returns {boolean} The selected value
	 */
	isSelected(value: FieldItemValue): boolean {
		if (!this.choiceFieldValue) {
			return false;
		}

		if (this.multiple && Array.isArray(this.choiceFieldValue)) {
			return this.choiceFieldValue.includes(value);
		} else {
			return this.choiceFieldValue === value;
		}
	}
}
