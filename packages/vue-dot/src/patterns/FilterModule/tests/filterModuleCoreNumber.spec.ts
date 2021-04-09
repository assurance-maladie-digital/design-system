import { FilterStructure } from '../types';

import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { FilterWorkflowCore } from '../mixins/filterModuleCore';

import { Filters, Rows } from '../types';

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
describe('FilterWorkflowCoreNumber', () => {

	it('test type number when row value is null', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.activeFilters = [
			{
				filterName: 'nbDownload',
				label: 'Nom de téléchargement',
				text: 'min 1',
				type: 'number',
				values: { numberMin: '1' }
			}
		];

		await wrapper.vm.$nextTick();

		// Row value is not a string
		const result = wrapper.vm.checkItemValues({ nbDownload: null });

		expect(result).toBe(false);
	});

	it('test type number check Item value null', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.activeFilters = [
			{
				filterName: 'nbDownload',
				label: 'Nom de téléchargement',
				text: 'min 1',
				type: 'number',
				values: {}
			}
		];

		await wrapper.vm.$nextTick();

		const result = wrapper.vm.checkItemValues({ nbDownload: '1' });

		expect(result).toBeTruthy;
	});

	it('emits change on filter type number with both min and max', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('nbDownload');

		const filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Change select value
		const numberFields = filterEdit?.fields;
		numberFields.numberMin.value = '1';
		numberFields.numberMax.value = '1';

		wrapper.vm.fieldsUpdated(numberFields);
		wrapper.vm.applyFilter();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[1][0]).toEqual(rows.filter((row) => row.nbDownload === 1));
	});

	it('emits change on filter type number with min only', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('nbDownload');

		const filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Change select value
		const numberFields = filterEdit?.fields;
		numberFields.numberMin.value = '2';

		wrapper.vm.fieldsUpdated(numberFields);
		wrapper.vm.applyFilter();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[1][0]).toEqual(rows.filter((row) => row.nbDownload === 2));
	});

	it('emits change on filter type number with max only', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('nbDownload');

		const filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Change select value
		const numberFields = filterEdit?.fields;
		numberFields.numberMax.value = '1';

		wrapper.vm.fieldsUpdated(numberFields);
		wrapper.vm.applyFilter();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[1][0]).toEqual(rows.filter((row) => row.nbDownload === 1));
	});
});
