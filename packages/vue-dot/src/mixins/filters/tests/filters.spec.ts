import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { FilterMixin } from '../';
import { FilterItem, ChipItem } from '../types';

interface TestComponent extends Vue {
	applyFunction(): unknown;
	resetFilter(): unknown;
	removeChip(event: Event | undefined): unknown;
	closeSidebar(): unknown;
	filters: Array<FilterItem[]>;
	onChange(event: unknown, filters: FilterItem): unknown;
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
	name: 'prenom',
	label: 'Prénom',
	chips: [],
	value: '',
	clearAfterValidate: true,
	limited: true,
	splited: false,
	description: '',
	showAll: false,
	icon: '',
	selection: [],
	defaultValue: undefined,
	style: ''
};
const splitedFilterExemple: FilterItem = {
	name: 'prenom',
	label: 'Prénom',
	chips: [],
	value: '',
	clearAfterValidate: true,
	limited: false,
	splited: true,
	description: '',
	showAll: false,
	icon: '',
	selection: [],
	defaultValue: undefined,
	style: ''
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
		template: '<div />'
	});
}

describe('filters', () => {
	it('test filter mixin', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.filters).toMatchSnapshot();
	});

	it('onChange with event is null ', async() => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;
		wrapper.vm.onChange(null, filterExemple);
		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('onchange-filters')).toBeFalsy();
	});

	it('onChange with event', async() => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;
		wrapper.vm.onChange('event', filterExemple);
		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('onchange-filters')).toBeTruthy();
	});

	it('onChange with limited filter', async() => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent, {
			propsData: {
				startDate: '2019-10-21'
			},
			mocks: {
				date: '2019-10-22'
			}
		}) as unknown as Wrapper<TestComponent>;

		wrapper.vm.onChange('event', limitedFilterExemple);
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted('onchange-filters')).toBeTruthy();
	});

	// TODO tester return vide
	it('onChange with a chip already exist', async() => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;
		filterExemple.chips.push(chipItemEvent);

		wrapper.vm.onChange(chipItemEvent, filterExemple);
		await wrapper.vm.$nextTick();
		expect(wrapper).toBeTruthy();
	});

	// TODO tester return vide
	it('onChange with slited', async() => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.onChange('event', splitedFilterExemple);
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted('onchange-filters')).toBeTruthy();
	});

	it('removeAccents', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.removeAccents('éléphant')).toBe('elephant');
	});

	it('closeSidebar', async() => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;
		wrapper.vm.closeSidebar();
		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('close-sidebar')).toBeTruthy();
	});

	//it('removeChip', async() => {
	//	const testComponent = createTestComponent();
	//	const wrapper = mount(testComponent) as Wrapper<TestComponent>;
	//	wrapper.vm.removeChip(chipItemEvent);
	//	await wrapper.vm.$nextTick();

	//	expect(wrapper.emitted('remove-chip')).toBeTruthy();
	//});

	it('resetFilter', async() => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;
		wrapper.vm.resetFilter();
		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('reset-filter')).toBeTruthy();
	});

	it('applyFunction', async() => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;
		wrapper.vm.applyFunction();
		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('apply-function')).toBeTruthy();
	});
});
