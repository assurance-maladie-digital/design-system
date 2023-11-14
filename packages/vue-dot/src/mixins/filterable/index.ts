/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import { FilterItem } from './types';

import { deepCopy } from '../../helpers/deepCopy';

import { ChipItem } from '../../elements/ChipList/types';

import slugify from 'slugify';

const Props = Vue.extend({
	props: {
		value: {
			type: Array as PropType<FilterItem[]>,
			default: () => []
		}
	}
});

@Component<Filterable>({
	model: {
		prop: 'value',
		event: 'update:value'
	},
	watch: {
		value: {
			handler(newValue: FilterItem[]) {
				this.filters = deepCopy(newValue);
			},
			immediate: true
		}
	}
})
export class Filterable extends Props {
	filters = [] as FilterItem[];

	getFilterCount(filter: FilterItem): number {
		return this.getChips(filter).length;
	}

	formatFilterName(name: string): string {
		return slugify(name, { lower: true });
	}

	getChips({ value, formatChip }: FilterItem): ChipItem[] {
		if (value !== undefined && formatChip) {
			return formatChip(value);
		}

		const isString = typeof value === 'string';
		const isNumber = typeof value === 'number';
		const isObject = typeof value === 'object';
		const isArray = Array.isArray(value);

		if (isString || isNumber) {
			const typedValue = value as string;

			if (typedValue === '') {
				return [];
			}

			return [{
				text: typedValue.toString(),
				value: typedValue
			}];
		}

		if (isArray) {
			const typedValue = value as any[];

			return typedValue.map(item => {
				if (typeof item !== 'object') {
					return {
						text: item.toString(),
						value: item
					};
				}

				return {
					text: item.text || item.value.toString(),
					value: item
				};
			});
		}

		if (isObject) {
			const typedValue = value as Record<string, any>;
			const isPeriodField = typedValue.from !== undefined && typedValue.to !== undefined;

			if (isPeriodField) {
				if (typedValue.from === null || typedValue.to === null) {
					return [];
				}

				return [{
					text: `${typedValue.from} – ${typedValue.to}`,
					value: typedValue
				}];
			}

			// Any object
			return Object.keys(typedValue).map(key => {
				// Use text property if it exists, else use value property or default to key value
				const text = typedValue[key].text || typedValue[key].value?.toString() || typedValue[key].toString();

				return {
					text,
					value: typedValue[key]
				};
			});
		}

		return [];
	}

	removeChip(filter: FilterItem, chip: ChipItem): void {
		const value = filter.value;
		const isString = typeof value === 'string';
		const isNumber = typeof value === 'number';
		const isObject = typeof value === 'object';
		const isArray = Array.isArray(value);

		if (isString || isNumber) {
			this.$set(filter, 'value', undefined);
		}

		if (isArray) {
			const typedValue = value as any[];
			const chipValue = chip.value as any;

			const filteredValue = typedValue.filter(item => {
				if (Array.isArray(chipValue)) {
					return !chipValue.includes(item);
				}

				if (typeof item === 'object') {
					return item.value !== chipValue.value;
				}

				return item !== chipValue;
			});

			const newValue = filteredValue.length ? filteredValue : undefined;

			this.$set(filter, 'value', newValue);
			this.updateValue();

			return;
		}

		if (isObject) {
			const typedValue = value as Record<string, any>;
			const chipValue = chip.value as any;
			const isPeriodField = typedValue.from !== undefined && typedValue.to !== undefined;

			if (isPeriodField) {
				this.$set(filter, 'value', undefined);
				this.updateValue();

				return;
			}

			delete typedValue[chipValue];
			this.$set(filter, 'value', typedValue);
		}
		this.updateValue();
	}

	resetFilter(filter: FilterItem): void {
		this.$set(filter, 'value', undefined);
		this.updateValue();
	}

	resetAllFilters(): void {
		this.filters.forEach(filter => {
			this.$set(filter, 'value', undefined);
			this.updateValue();
		});
	}

	updateValue(): void {
		this.$emit('update:value', this.filters);
	}
}
