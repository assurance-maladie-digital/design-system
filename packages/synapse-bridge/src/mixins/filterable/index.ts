/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { FilterItem } from "./types.ts";

import { deepCopy } from "../../helpers/deepCopy";

import { ChipItem } from "../../elements/ChipList/types";

import slugify from "slugify";

export const Filterable = defineComponent({
	name: "Filterable",
	props: {
		modelValue: {
			type: Array as PropType<FilterItem[]>,
			default: () => [],
		},
	},
	emits: ["update:modelValue"],
	data() {
		return {
			filters: [] as FilterItem[],
		};
	},
	watch: {
		modelValue: {
			handler(newValue: FilterItem[]) {
				this.filters = deepCopy(newValue);
			},
			immediate: true,
		},
	},
	methods: {
		getFilterCount(filter: FilterItem): number {
			return this.getChips(filter).length;
		},

		formatFilterName(name: string): string {
			return slugify(name, { lower: true });
		},

		getChips({ value, formatChip }: FilterItem): ChipItem[] {
			if (value !== undefined && formatChip) {
				return formatChip(value);
			}

			const isString = typeof value === "string";
			const isNumber = typeof value === "number";
			const isObject = typeof value === "object";
			const isArray = Array.isArray(value);

			if (isString || isNumber) {
				if (value === "") {
					return [];
				}

				return [
					{
						text: value.toString(),
						value: value,
					},
				];
			}

			if (isArray) {
				return value.map((item) => {
					if (typeof item !== "object") {
						return {
							text: item.toString(),
							value: item,
						};
					}

					return {
						text: item.text || item.value.toString(),
						value: item,
					};
				});
			}

			if (isObject) {
				const typedValue = value as Record<string, any>;
				const isPeriodField =
					typedValue.from !== undefined &&
					typedValue.to !== undefined;

				if (isPeriodField) {
					if (typedValue.from === null || typedValue.to === null) {
						return [];
					}

					return [
						{
							text: `${typedValue.from} – ${typedValue.to}`,
							value: typedValue,
						},
					];
				}

				// Any object
				return Object.keys(typedValue).map((key) => {
					// Use text property if it exists, else use value property or default to key value
					const text =
						typedValue[key].text ||
						typedValue[key].value?.toString() ||
						typedValue[key].toString();

					return {
						text,
						value: typedValue[key],
					};
				});
			}

			return [];
		},

		removeChip(filter: FilterItem, chip: ChipItem): void {
			const value = filter.value;
			const isString = typeof value === "string";
			const isNumber = typeof value === "number";
			const isObject = typeof value === "object";
			const isArray = Array.isArray(value);

			if (isString || isNumber) {
				filter.value = undefined;
			}

			if (isArray) {
				const typedValue = value as any[];
				const chipValue = chip.value as any;

				const filteredValue = typedValue.filter((item) => {
					if (Array.isArray(chipValue)) {
						return !chipValue.includes(item);
					}

					if (typeof item === "object") {
						return item.value !== chipValue.value;
					}

					return item !== chipValue;
				});

				const newValue = filteredValue.length
					? filteredValue
					: undefined;

				filter.value = newValue;

				return;
			}

			if (isObject) {
				const typedValue = value as Record<string, any>;
				const chipValue = chip.value as any;
				const isPeriodField =
					typedValue.from !== undefined &&
					typedValue.to !== undefined;

				if (isPeriodField) {
					filter.value = undefined;

					return;
				}

				delete typedValue[chipValue];
				filter.value = typedValue;
			}
		},

		resetFilter(filter: FilterItem): void {
			filter.value = undefined;
		},

		resetAllFilters(): void {
			this.filters.forEach((filter) => {
				filter.value = undefined;
			});
			this.updateValue();
		},

		updateValue(): void {
			this.$emit("update:modelValue", this.filters);
		},
	},
});
