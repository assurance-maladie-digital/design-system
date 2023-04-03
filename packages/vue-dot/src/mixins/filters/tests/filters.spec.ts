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
const chipItemEvent: ChipItem = {
	text: 'nom',
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
					splitedFilterExemple
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

	// TO FIX
	/*it('should not add a new chip to the filter when the event is undefined', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.onChange(undefined, filterExemple);

		expect(wrapper.vm.filters[0].chips).toHaveLength(0);
	});*/

	it('should clear the value of the filter when clearAfterValidate is true', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.filters[0].clearAfterValidate = true;
		wrapper.vm.filters[0].value = 'example';

		wrapper.vm.onChange('foo', wrapper.vm.filters[0]);

		expect(wrapper.vm.filters[0].value).toBeNull();
	});

	// TO FIX
	/*it('should emit the onchange-filters event when onChange is called', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.onChange('example', wrapper.vm.filters[0]);
		wrapper.vm.$nextTick(() => {
			expect(wrapper.emitted('onchange-filters')).toBeTruthy();
		});
	});*/

	it('should add a new chip to the filter when limited is true', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.filters[1].limited = true;

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

		// Assertion
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
