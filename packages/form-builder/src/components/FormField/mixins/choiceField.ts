import Component, { mixins } from 'vue-class-component';

import { ChoiceValue, FieldItem, FieldItemValue } from '../types';

import { FieldComponent } from './fieldComponent';

const MixinsDeclaration = mixins(FieldComponent);

/** Mixin to control the item selection */
@Component<ChoiceField>({
	watch: {
		// Listen the current field value for the component
		'field.value': {
			handler(value: ChoiceValue): void {
				if (value) {
					/** In multiple mode, put the value in an array if it wasn't already */
					if (this.isMultiple && !Array.isArray(value)) {
						this.choiceValue = [value];
					} else {
						this.choiceValue = value;
					}
				} else {
					// Reset the choice value
					this.choiceValue = this.isMultiple ? [] : null;
				}
			},
			immediate: true,
			deep: true
		}
	}
})
export class ChoiceField extends MixinsDeclaration {
	choiceValue: ChoiceValue | null = this.isMultiple ? [] : null;

	get isMultiple(): boolean {
		return Boolean(this.field.metadata?.multiple);
	}

	/**
	 * Toggle the item
	 *
	 * @param {FieldItem} item The selected item
	 * @returns {void}
	 */
	toggleItem(item: FieldItem): void {
		const active: boolean = this.isSelected(item.value);

		// Items must be an array
		if (!Array.isArray(this.field.items)) {
			return;
		}

		let newChoiceValue: ChoiceValue;

		// Set the new value in simple mode
		if (!this.isMultiple) {
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
				if (!item.value) {
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
						const isItemSelectedAlone = this.field.items.find((element) => {
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

		this.emitChangeEvent(this.choiceValue);
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

		if (this.isMultiple && Array.isArray(this.choiceValue)) {
			return this.choiceValue.includes(value);
		} else {
			return this.choiceValue === value;
		}
	}
}
