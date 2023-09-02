/* eslint-disable max-lines */
import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Filterable } from '../';
import { ChipItem, FilterItem } from '../types';

interface TestComponent extends Vue {
	value: FilterItem[];
	formatFilterName: (name: string) => string;
	getChips: ({ value, formatChip }: FilterItem) => ChipItem[];
	removeChip: (filter: FilterItem, chip: ChipItem) => void;
	resetFilter: (filter: FilterItem) => void;
	resetAllFilters: () => void;
	updateValue: () => void;
}

/** Create the test component */
function createTestComponent() {
	return Vue.component('TestComponent', {
		mixins: [
			Filterable
		],
		template: '<div />'
	});
}

describe('Filterable', () => {
	describe('formatFilterName', () => {
		it('returns the correct slugified name', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const name = wrapper.vm.formatFilterName('Test Name');

			expect(name).toBe('test-name');
		});
	});

	describe('getChips', () => {
		it('uses the formatChip function to compute the chip', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: 'test',
				formatChip: (value: unknown): ChipItem[] => {
					return [
						{
							text: 'Test',
							value
						}
					];
				}
			};

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([
				{
					text: 'Test',
					value: 'test'
				}
			]);
		});

		it('returns an empty array when the value is an empty string', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: ''
			};

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([]);
		});

		it('returns the correct text when the value is a string', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: 'test'
			};

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([
				{
					text: 'test',
					value: 'test'
				}
			]);
		});

		it('returns the correct text when the value is a number', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: 1
			};

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([
				{
					text: '1',
					value: 1
				}
			]);
		});

		it('returns the correct text when the value is a period field object', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: {
					from: 1,
					to: 2
				}
			};

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([
				{
					text: '1 – 2',
					value: {
						from: 1,
						to: 2
					}
				}
			]);
		});

		it('returns an empty array when the value is a period field object with null values', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: {
					from: null,
					to: null
				}
			};

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([]);
		});

		it('returns the correct text when the value is an object', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: {
					one: 1,
					two: {
						value: 2
					}
				}
			};

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([
				{
					text: '1',
					value: 1
				},
				{
					text: '2',
					value: {
						value: 2
					}
				}
			]);
		});

		it('returns the correct text when the value is an array', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: [1, 2]
			};

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([
				{
					text: '1',
					value: 1
				},
				{
					text: '2',
					value: 2
				}
			]);
		});

		it('returns the correct text when the value is an array of objects', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: [
					{
						value: 1
					},
					{
						value: 2
					}
				]
			};

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([
				{
					text: '1',
					value: {
						value: 1
					}
				},
				{
					text: '2',
					value: {
						value: 2
					}
				}
			]);
		});

		it('returns the correct text when the value is an array of objects with text properties', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: [
					{
						text: 'One'
					},
					{
						text: 'Two'
					}
				]
			};

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([
				{
					text: 'One',
					value: {
						text: 'One'
					}
				},
				{
					text: 'Two',
					value: {
						text: 'Two'
					}
				}
			]);
		});

		it('returns the correct text when the value is an array of objects with text and value properties', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: [
					{
						text: 'One',
						value: 1
					},
					{
						text: 'Two',
						value: 2
					}
				]
			};

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([
				{
					text: 'One',
					value: {
						text: 'One',
						value: 1
					}
				},
				{
					text: 'Two',
					value: {
						text: 'Two',
						value: 2
					}
				}
			]);
		});

		it('returns an empty array when the value is undefined', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {} as FilterItem;

			const chips = wrapper.vm.getChips(filter);

			expect(chips).toEqual([]);
		});
	});

	describe('removeChip', () => {
		it('removes the chip from the filter', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: 'test'
			};

			const chip = {
				text: 'test',
				value: 'test'
			};

			wrapper.vm.removeChip(filter, chip);

			expect(filter.value).toBeUndefined();
		});

		it('removes the chip from the filter when the value is a number', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: 1
			};

			const chip = {
				text: '1',
				value: 1
			};

			wrapper.vm.removeChip(filter, chip);

			expect(filter.value).toBeUndefined();
		});

		it('removes the chip from the filter when the value is an object', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: {
					one: 1,
					two: {
						value: 2
					}
				}
			};

			const chip = {
				text: '1',
				value: 'one'
			};

			wrapper.vm.removeChip(filter, chip);

			expect(filter.value).toEqual({
				two: {
					value: 2
				}
			});
		});

		it('removes the chip from the filter when the value is a period field object', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const periodFilter = {
				name: 'Test',
				value: {
					from: 1,
					to: 2
				}
			};

			const periodChip = {
				text: '1 – 2',
				value: {
					from: 1,
					to: 2
				}
			};

			wrapper.vm.removeChip(periodFilter, periodChip);

			expect(periodFilter.value).toBeUndefined();
		});

		it('removes the chip from the filter when the value is a period field object with null values', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const periodFilter = {
				name: 'Test',
				value: {
					from: null,
					to: null
				}
			};

			const periodChip = {
				text: '1 – 2',
				value: {
					from: null,
					to: null
				}
			};

			wrapper.vm.removeChip(periodFilter, periodChip);

			expect(periodFilter.value).toBeUndefined();
		});

		it('removes the chip from the filter when the value is an array', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const arrayFilter = {
				name: 'Test',
				value: [1, 2]
			};

			const arrayChip = {
				text: '1',
				value: 1
			};

			wrapper.vm.removeChip(arrayFilter, arrayChip);

			expect(arrayFilter.value).toEqual([2]);
		});

		it('removes the chip from the filter when the value is an array of objects', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const arrayFilter = {
				name: 'Test',
				value: [
					{
						value: 1
					},
					{
						value: 2
					}
				]
			};

			const arrayChip = {
				text: '1',
				value: {
					value: 1
				}
			};

			wrapper.vm.removeChip(arrayFilter, arrayChip);

			expect(arrayFilter.value).toEqual([
				{
					value: 2
				}
			]);
		});

		it('removes the chip from the filter when the value is an empty array', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const arrayFilter = {
				name: 'Test',
				value: []
			};

			const arrayChip = {
				text: '1',
				value: 1
			};

			wrapper.vm.removeChip(arrayFilter, arrayChip);

			expect(arrayFilter.value).toBeUndefined();
		});

		it('removes the chip from the filter when the value is an array of strings', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const arrayFilter = {
				name: 'Test',
				value: ['One', 'Two']
			};

			const arrayChip = {
				text: 'One',
				value: ['One']
			};

			wrapper.vm.removeChip(arrayFilter, arrayChip);

			expect(arrayFilter.value).toEqual(['Two']);
		});
	});

	describe('resetFilter', () => {
		it('resets the filter', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filter = {
				name: 'Test',
				value: 'test'
			};

			wrapper.vm.resetFilter(filter);

			expect(filter.value).toBeUndefined();
		});
	});

	describe('resetAllFilters', () => {
		it('resets all filters', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filters = [
				{
					name: 'Test',
					value: 'test'
				},
				{
					name: 'Test 2',
					value: 'test 2'
				}
			];

			wrapper.setData({
				filters
			});

			wrapper.vm.resetAllFilters();

			expect(filters[0].value).toBeUndefined();
			expect(filters[1].value).toBeUndefined();
		});
	});

	describe('updateValue', () => {
		it('emits the input event with the filters', () => {
			const testComponent = createTestComponent();

			const wrapper = mount(testComponent) as Wrapper<TestComponent>;

			const filters = [
				{
					name: 'Test',
					value: 'test'
				},
				{
					name: 'Test 2',
					value: 'test 2'
				}
			];

			wrapper.setData({ filters });
			wrapper.vm.updateValue();

			const emitted = wrapper.emitted('update:value');

			expect(emitted).toBeTruthy();
			expect((emitted as unknown[])[0]).toEqual([filters]);
		});
	});
});
