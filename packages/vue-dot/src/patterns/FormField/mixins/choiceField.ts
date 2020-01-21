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

	choiceValue: ChoiceValue = this.isMultiple ? [] : undefined;

	get isMultiple(){
		return this.field && this.field.metadata && this.field.metadata.multiple;
	}

	/**
	 * toggle the item
	 *
	 * @param {FieldItem} item the selected item
	 * @param {boolean} active is selected or not
	 */
	toggleItem(item: FieldItem, active: boolean) {

		/**
		 * items must be an array
		 */
		if(!Array.isArray(this.field.items)) return;

		// set the new value in simple mode
		if(!this.isMultiple) {
			this.choiceValue = active ? undefined : item.value;
		} else if (active && Array.isArray(this.choiceValue)) {
			// unselect the item
			const valueIndex = this.choiceValue.indexOf(item.value);
			this.choiceValue.splice(valueIndex,1);
		} else if (Array.isArray(this.choiceValue)) {

			// can't select a null value in multiple mode
			if(!item.value) return;

			const isAlone: boolean = item.alone || false;

			// if item alone, unselect all other
			if (isAlone) {
				this.choiceValue = [item.value];
			} else {
				// else unselect all alone
				let index = this.choiceValue.length - 1;
				while (index >= 0) {
					const valueSelected = this.choiceValue[index];
					// search if the item is alone
					if (
						this.field.items.find((element) => {
							return element.value === valueSelected && element.alone;
						})
					) {
						// delete alone item
						this.choiceValue.splice(index, 1);
					}

					index -= 1;
				}
				// add the item to the selection
				this.choiceValue.push(item.value);
			}
		}

		this.emitChangeEvent(this.choiceValue);
	}
}
