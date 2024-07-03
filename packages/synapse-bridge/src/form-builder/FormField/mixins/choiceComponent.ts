import { defineComponent } from "vue";
import type { PropType } from "vue";

import type {
	ChoiceFieldValue,
	FieldItem,
	FieldOptions,
	FieldItemValue,
} from "../types";

export default defineComponent({
	props: {
		items: {
			type: Array as PropType<FieldItem[]>,
			required: true,
		},
		modelValue: {
			type: [Array, Number, String] as PropType<ChoiceFieldValue>,
			default: null,
		},
		options: {
			type: Object as PropType<FieldOptions>,
			default: null,
		},
		multiple: {
			type: Boolean,
			default: false,
		},
		errorMessages: {
			type: [String, Array] as PropType<string[]>,
			default: null,
		},
	},
	watch: {
		modelValue: {
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
			deep: true,
		},
	},
	data() {
		return {
			choiceFieldValue: this.multiple ? [] : null as ChoiceFieldValue,
		};
	},
	methods: {
		toggleItem(item: FieldItem): void {
			const active = this.isSelected(item.value);

			let newChoiceValue: ChoiceFieldValue;

			if (!this.multiple) {
				newChoiceValue = active ? null : item.value;
			} else {
				newChoiceValue = [
					...(this.choiceFieldValue as FieldItemValue[]),
				];

				if (active && Array.isArray(this.choiceFieldValue)) {
					// Unselect the item
					const valueIndex = this.choiceFieldValue.indexOf(
						item.value
					);

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
							const valueSelected = (
								newChoiceValue as FieldItemValue[]
							)[index];

							const isItemSelectedAlone = this.items.find(
								(element) => {
									return (
										element.value === valueSelected &&
										element.alone
									);
								}
							);

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
		},

		emitChangeEvent(newValue: ChoiceFieldValue): void {
			this.$emit("update:modelValue", newValue);
		},

		isSelected(value: FieldItemValue): boolean {
			if (
				this.choiceFieldValue === undefined ||
				this.choiceFieldValue === null
			) {
				return false;
			}

			if (this.multiple && Array.isArray(this.choiceFieldValue)) {
				return this.choiceFieldValue.includes(value);
			} else {
				return this.choiceFieldValue === value;
			}
		},
	},
});
