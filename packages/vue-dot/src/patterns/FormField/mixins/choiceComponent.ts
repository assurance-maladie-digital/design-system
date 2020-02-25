import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import { ChoiceValue, FieldItem, FieldMetadata, FieldItemValue } from '../types';

const Props = Vue.extend({
	props: {
		/** The choice field to display */
		value: {
			type: [Array, Number, String] as PropType<ChoiceValue>,
			default: null
		},
		metadata: {
			type: Object as PropType<FieldMetadata>,
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

/** Mixin to control the item selection */
@Component<ChoiceComponent>({
	watch: {
		// Listen the current field value for the component
		value: {
			handler(value: ChoiceValue) {
				if (value !== null && value !== undefined) {
					/** In multiple mode, put the value in an array if it wasn't already */
					if (this.multiple && !Array.isArray(value)) {
						this.choiceValue = [value];
					} else {
						this.choiceValue = value;
					}
				} else {
					// Reset the choice value
					this.choiceValue = this.multiple ? [] : null;
				}
			},
			immediate: true,
			deep: true
		}
	}
})
export class ChoiceComponent extends Props {
	choiceValue: ChoiceValue | null = this.multiple ? [] : null;

	/**
	 * Toggle the item
	 *
	 * @param {FieldItem} item The selected item
	 * @returns {void}
	 */
	toggleItem(item: FieldItem): void {
		const active: Boolean = this.isSelected(item.value);

		let newChoiceValue: ChoiceValue;

		// Set the new value in simple mode
		if (!this.multiple) {
			newChoiceValue = active ? null : item.value;
		} else {
			newChoiceValue = [
				...this.choiceValue as FieldItemValue[]
			];

			if (active && Array.isArray(this.choiceValue)) {
				// Unselect the item
				const valueIndex = this.choiceValue.indexOf(item.value);

				newChoiceValue.splice(valueIndex, 1);
			} else {
				// Can't select a null value in multiple mode
				if (item.value === undefined || item.value === null) {
					return;
				}

				const isAlone: boolean = Boolean(item.alone);

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

		this.choiceValue = newChoiceValue;

		this.emitChoiceUpdated(this.choiceValue);
	}

	emitChoiceUpdated(newValue: ChoiceValue) {
		this.$emit('change', newValue);
	}

	/**
	 * Check if the button is selected
	 *
	 * @param {FieldItemValue} value The button value to test if it is selected
	 * @returns {boolean} The selected value
	 */
	isSelected(value: FieldItemValue): boolean {
		if (!this.choiceValue) {
			return false;
		}

		if (Array.isArray(this.choiceValue)) {
			return this.choiceValue.includes(value);
		} else {
			return this.choiceValue === value;
		}
	}
}
