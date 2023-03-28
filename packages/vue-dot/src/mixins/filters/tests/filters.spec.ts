import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { filters } from '../';

interface TestComponent extends Vue {
	filters: Record<string, string>;
}

const filtersExemple = [
	{
		name: 'nom',
		label: 'Nom',
		value: 'Salut',
		formatting: (value: string): string => `La value est : ${value}`,
		chips: []
	},
	{
		name: 'date',
		label: 'Date',
		description: 'test description date',
		chips: []
	},
	{
		name: 'range',
		label: 'Nombres',
		description: 'test description range',
		formatting: (values: number[]): string => values[0] + ' - ' + values[1],
		limited: true,
		chips: [],
		value: [0,0],
		defaultValue: [50,50]
	},
	{
		name: 'prenom',
		label: 'Prénom',
		chips: [],
		value: '',
		clearAfterValidate: true,
		style: 'margin-left: 50px !important'
	}
];

/** Create the test component */
function createTestComponent() {
	return Vue.component('TestComponent', {
		mixins: [
			filters
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

	it('onChange', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.onChange('éléphant')).toBe('elephant');
	});

	it('removeAccents', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.removeAccents(filtersExemple)).toBe('elephant');
	});

});
