import { PeriodValue } from '@cnamts/form-builder/src/components/FormField/types.d';
import { FilterStructure } from './../../types.d';

import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { FilterWorkflowCore } from '../filterWorkflowCore';

import { Filters, Rows } from '../../types';

export const filters: Filters = {
	filename: {
		label: 'Fichier',
		type: 'text'
	},
	nbDownload: {
		label: 'Nombre de téléchargement',
		type: 'number'
	},
	date: {
		label: 'Date',
		type: 'date'
	}
};

export const rows: Rows = [
	{
		filename: 'fichier1.txt',
		nbDownload: 1,
		date: '20/10/2020'
	},
	{
		filename: 'fichier2.txt',
		nbDownload: 2,
		date: '21/10/2020'
	}
];

/** Create the wrapper */
function createWrapper(filters: Filters, rows?: Rows) {
	const component = Vue.component('Test', {
		mixins: [
			FilterWorkflowCore
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			rows,
			filters
		}
	}) as Wrapper<FilterWorkflowCore>;
}

// Tests
describe('FilterWorkflowCoreDate', () => {

	it('emits change on filter type date from and to', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('date');

		const filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Change select value
		const dateFields = filterEdit?.fields;
		dateFields.date.value = {
			from: '2020/10/20',
			to: '2020/10/20'
		} as PeriodValue;

		wrapper.vm.fieldsUpdated(dateFields);
		wrapper.vm.applyFilter();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[1][0]).toEqual([rows.find((row) => row.date === '20/10/2020')]);
	});

	it('emits change on filter type date, from only', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('date');

		const filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Change select value
		const dateFields = filterEdit?.fields;
		dateFields.date.value = {
			from: '2020/10/21'
		} as PeriodValue;

		wrapper.vm.fieldsUpdated(dateFields);
		wrapper.vm.applyFilter();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[1][0]).toEqual([rows.find((row) => row.date === '21/10/2020')]);
	});

	it('emits change on filter type date, to only', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('date');

		const filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Change select value
		const dateFields = filterEdit?.fields;
		dateFields.date.value = {
			to: '2020/10/20'
		} as PeriodValue;

		wrapper.vm.fieldsUpdated(dateFields);
		wrapper.vm.applyFilter();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[1][0]).toEqual([rows.find((row) => row.date === '20/10/2020')]);
	});

	it('test type date when row value is not a string', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.activeFilters = [
			{
				filterName: 'date',
				label: 'Date',
				text: '20/10/2020 selectionnée',
				type: 'date',
				values: { date: { from: '2020/10/20', to: null } }
			}
		];

		await wrapper.vm.$nextTick();

		// Row value is not a string
		const result = wrapper.vm.checkItemValues({ date: 1 });

		expect(result).toBe(false);
	});

	it('test type date when row value is null', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.activeFilters = [
			{
				filterName: 'date',
				label: 'Date',
				text: '20/10/2020 selectionnée',
				type: 'date',
				values: { date: { from: '2020/10/20', to: null } }
			}
		];

		await wrapper.vm.$nextTick();

		// Row value is not a string
		const result = wrapper.vm.checkItemValues({ date: null });

		expect(result).toBe(false);
	});

	it('test type date check Item value null', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.activeFilters = [
			{
				filterName: 'date',
				label: 'Date',
				text: '20/10/2020 selectionnée',
				type: 'date',
				values: {}
			}
		];

		await wrapper.vm.$nextTick();

		const result = wrapper.vm.checkItemValues({ date: '20/10/2020' });

		expect(result).toBeTruthy;
	});

	it('test type date: apply filter when no value', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('date');

		const filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Change select value
		const dateFields = filterEdit?.fields;
		dateFields.date.value = {} as PeriodValue;

		wrapper.vm.fieldsUpdated(dateFields);
		wrapper.vm.applyFilter();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[0][0]).toEqual(rows);
	});
});