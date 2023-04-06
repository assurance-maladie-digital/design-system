import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { FilterMixin } from '../';
import { FilterItem, ChipItem } from '../types';

interface TestComponent extends Vue {
	isMobile: boolean;
	applyFunction(): unknown;
	resetFilter(): unknown;
	removeChip(event: ChipItem): unknown;
	closeSidebar(): unknown;
	filters: FilterItem[];
	onChange(event: unknown, filters: FilterItem): void;
	removeAccents(str: string): string;
	getChipValue(event: unknown): unknown;
	formatting(value: unknown): string | null | undefined;
}

const filterExemple: FilterItem = {
	name: 'prenom',
	label: 'Prénom',
	chips: [],
	value: '',
	clearAfterValidate: true,
	limited: false,
	splited: false,
	description: '',
	showAll: false,
	icon: '',
	selection: [],
	defaultValue: undefined,
	style: ''
};
const limitedFilterExemple: FilterItem = {
	...filterExemple,
	limited: true
};
const splitedFilterExemple: FilterItem = {
	...filterExemple,
	splited: true
};
const defaultValueExemple: FilterItem = {
	...filterExemple,
	defaultValue: 'defaultValue'
};
const chipItemEvent: ChipItem = {
	text: 'example',
	value: 'event'
};

/** Create the test component */
function createTestComponent() {
	return Vue.component('TestComponent', {
		mixins: [
			FilterMixin
		],
		data() {
			return {
				filters: [
					filterExemple,
					limitedFilterExemple,
					splitedFilterExemple,
					defaultValueExemple
				]
			};
		},
		template: '<div />'
	});
}

describe('filters', () => {
	it('test filter mixin', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.filters).toMatchSnapshot();
	});

	it('should not add a new chip to the filter when the event is undefined', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.onChange(undefined, filterExemple);

		expect(wrapper.vm.filters[0].chips).toHaveLength(0);
	});

	it('should add a new chip to the filter when onChange is called', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.onChange('example', filterExemple);

		expect(wrapper.vm.filters[0].chips).toContainEqual({
			text: 'example',
			value: 'example'
		});
	});

	it('should not add a new chip to the filter when the chip already exists', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.onChange('example', filterExemple);
		wrapper.vm.onChange('example', filterExemple);

		expect(wrapper.vm.filters[0].chips).toHaveLength(1);
	});

	it('should return a string value when onChange is called with a string argument', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.getChipValue('example')).toBe('example');
	});

	it('should return an object value when onChange is called with an object argument', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.getChipValue({ foo: 'bar' })).toBe('bar');
	});

	it('should clear the value of the filter when clearAfterValidate is true', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.onChange('foo', filterExemple);

		expect(wrapper.vm.filters[0].value).toBeNull();
	});

	it('should not clear the value of the filter when clearAfterValidate is true and defaultValue is defined', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.onChange('foo', defaultValueExemple);

		expect(wrapper.vm.filters[3].value).toBe('defaultValue');
	});

	it('should emit the onchange-filters event when onChange is called', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.$emit('onchange-filters', 'example');

		wrapper.vm.$nextTick(() => {
			expect(wrapper.emitted('onchange-filters')).toBeTruthy();
		});
	});

	it('should add a new chip to the filter when limited is true', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.onChange('example', wrapper.vm.filters[1]);

		expect(wrapper.vm.filters[1].chips).toContainEqual({
			text: 'example',
			value: 'example'
		});
	});

	it('should split the value into chips when splited is true', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.onChange({ foo: 'bar', baz: 'qux' }, wrapper.vm.filters[2]);

		expect(wrapper.vm.filters[2].chips).toStrictEqual([
			{ text: 'bar', value: 'bar' },
			{ text: 'qux', value: 'qux' }
		]);
	});

	it('should not split the value into chips when splited is true and the value is not an object', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.onChange('example', wrapper.vm.filters[2]);

		expect(wrapper.vm.filters[2].chips).toStrictEqual([]);
	});

	it('should return the chip value with formatting function', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.formatting = (event: ChipItem) => event.text.toUpperCase();
		wrapper.vm.onChange('example', wrapper.vm.filters[0]);

		expect(wrapper.vm.formatting(chipItemEvent)).toBe('EXAMPLE');
	});

	it('should return the chip value when formatting function is null', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.formatting = (event: ChipItem) => null;
		wrapper.vm.onChange('example', wrapper.vm.filters[0]);

		expect(wrapper.vm.formatting(chipItemEvent)).toBeNull();
	});

	it('should return the chip value when formatting function is undefined', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.formatting = (event: ChipItem) => undefined;
		wrapper.vm.onChange('example', wrapper.vm.filters[0]);

		expect(wrapper.vm.formatting(chipItemEvent)).toBeUndefined();
	});

	it('should split the value into chips when splited is true and the value of the object use formatting function', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.formatting = (event: ChipItem) => event.text.toUpperCase();
		wrapper.vm.onChange({ firstName: 'Alice', lastName: 'Smith' }, wrapper.vm.filters[2]);

		expect(wrapper.vm.filters[2].chips).not.toStrictEqual([
			{ text: 'ALICE', value: 'ALICE' },
			{ text: 'SMITH', value: 'SMITH' }
		]);
	});

	it('should return true if the screen is mobile', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent, {
			mocks: {
				$vuetify: {
					breakpoint: {
						smAndDown: true
					}
				}
			}
		});

		expect(wrapper.vm.isMobile).toBe(true);
	});

	it('should remove accents from a string', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.removeAccents('áéíóú')).toBe('aeiou');
	});

	it('should emit the close-sidebar event when closeSidebar is called', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.closeSidebar();

		expect(wrapper.emitted('close-sidebar')).toBeTruthy();
	});

	it('should emit the remove-chip event when removeChip is called', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.removeChip(chipItemEvent);

		expect(wrapper.emitted('remove-chip')).toBeTruthy();
	});

	it ('should emit the reset-filter event when resetFilter is called', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.resetFilter();

		expect(wrapper.emitted('reset-filter')).toBeTruthy();
	});

	it('should emit the apply-function event when applyFunction is called', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.applyFunction();

		expect(wrapper.emitted('apply-function')).toBeTruthy();
	});
});
