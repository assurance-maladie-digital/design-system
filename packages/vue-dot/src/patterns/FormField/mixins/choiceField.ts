import Component from 'vue-class-component';

import { ChoiceValue, FieldItem } from '../types';

import FieldComponent from './fieldComponent';

/** Choice field component to controle the item selection if needed */
@Component<ChoiceField>({
	watch: {
		// Listen the current field value for the component
		'field.value': {
			handler(value: ChoiceValue) {
				if (value) {
					this.choiceValue = value;
				}
			},
			immediate: true,
			deep: true
		}
	}
})
export default class ChoiceField extends FieldComponent {
	choiceValue?: ChoiceValue;

	get isMultiple() {
		return this.field && this.field.metadata && this.field.metadata.multiple;
	}

	/**
	 * Toggle the item
	 *
	 * @param {FieldItem} item The selected item
	 * @param {boolean} active Is selected or not
	 */
	toggleItem(item: FieldItem, active: boolean) {
		/**
		 * Items must be an array
		 * Item value must be defined
		 */
		if (!Array.isArray(this.field.items)) {
			return;
		}
		// Set the new value in simple mode
		if (!this.isMultiple) {
			this.choiceValue = active ? null : item.value;
		} else if (active && Array.isArray(this.choiceValue)) {
			// Unselect the item
			const valueIndex = this.choiceValue.indexOf(item.value);
			this.choiceValue.splice(valueIndex,1);
		} else {

			// Can't select a null value in multiple mode
			if (!item.value) {
				return;
			}
			// Init choiceValue as array if not
			if (!Array.isArray(this.choiceValue)) {
				this.choiceValue = [];
			}

			const isAlone: boolean = Boolean(item.alone);

			// If item alone, unselect all other
			if (isAlone) {
				this.choiceValue = [item.value];
			} else {
				// Else unselect all alone
				let index = this.choiceValue.length - 1;
				while (index >= 0) {
					const valueSelected = this.choiceValue[index];
					// Search if the item is alone
					const isItemSelectedAlone = this.field.items.find((element) => {
						return element.value === valueSelected && element.alone;
					});
					if (
						isItemSelectedAlone
					) {
						// Delete alone item
						this.choiceValue.splice(index, 1);
					}

					index -= 1;
				}
				// Add the item to the selection
				this.choiceValue.push(item.value);
			}
		}

		this.emitChangeEvent(this.choiceValue);
	}
}
