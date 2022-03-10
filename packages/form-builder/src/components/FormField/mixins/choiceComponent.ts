import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { ChoiceFieldValue, FieldItem, FieldOptions, FieldItemValue } from '../types';

const Props = Vue.extend({
	props: {
		items: {
			type: Array as PropType<FieldItem[]>,
			required: true
		},
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
		errorMessages: {
			type: [String, Array, Object],
			default: null
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component<ChoiceComponent>({
	watch: {
		value: {
			handler(value: ChoiceFieldValue): void {
				if (value !== null && value !== undefined) {
					if (this.multiple && !Array.isArray(value)) {
						this.choiceFieldValue = [value];
					} else {
						this.choiceFieldValue = value;
					}
				} else {
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

	toggleItem(item: FieldItem): void {
		const active = this.isSelected(item.value);

		let newChoiceValue: ChoiceFieldValue;

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
				if (item.value === undefined || item.value === null) {
					return;
				}

				const isAlone = Boolean(item.alone);

				if (isAlone) {
					newChoiceValue = [item.value];
				} else {
					let index = newChoiceValue.length - 1;

					while (index >= 0) {
						const valueSelected = (newChoiceValue as FieldItemValue[])[index];

						const isItemSelectedAlone = this.items.find((element) => {
							return element.value === valueSelected && element.alone;
						});

						if (isItemSelectedAlone) {
							newChoiceValue.splice(index, 1);
						}

						index -= 1;
					}

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

	isSelected(value: FieldItemValue): boolean {
		if (this.choiceFieldValue === undefined || this.choiceFieldValue === null) {
			return false;
		}

		if (this.multiple && Array.isArray(this.choiceFieldValue)) {
			return this.choiceFieldValue.includes(value);
		} else {
			return this.choiceFieldValue === value;
		}
	}
}
