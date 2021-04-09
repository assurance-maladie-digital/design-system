import { filterStructures } from '../filterStructures';
import { ChoiceValue } from '@cnamts/form-builder/src/components/FormField/types';
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
describe('FilterWorkflowCore', () => {

	it('emits change by default', async() => {
		const wrapper = createWrapper(filters);

		await wrapper.vm.$nextTick();

		const event = wrapper.emitted('change') || [];

		expect(event[0][0]).toEqual([]);
	});

	it('emits change prop rows', async() => {
		const rowsChanged: Rows = [
			{
				filename: 'fichier1.txt',
				nbDownload: 1,
				date: '20/10/2020'
			},
			{
				filename: 'fichier2.txt',
				nbDownload: 2,
				date: '21/10/2020'
			},
			{
				filename: 'fichier3.txt',
				nbDownload: 3,
				date: '22/10/2020'
			}
		];
		const wrapper = createWrapper(filters, rows);

		wrapper.setProps({ rows: rowsChanged  });
		expect(wrapper.vm.rows).toEqual(rowsChanged);

		await wrapper.vm.$nextTick();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[2][0]).toEqual(rowsChanged);
	});

	it('emits change when prop filters is changed', async() => {
		const filtersChanged: Filters = {
			filename: {
				label: 'Fichier',
				type: 'text'
			},
			nbDownload: {
				label: 'Nombre de téléchargement',
				type: 'number'
			}
		};

		const wrapper = createWrapper(filters, rows);

		await wrapper.vm.$nextTick();

		wrapper.setProps({ filters: filtersChanged });

		await wrapper.vm.$nextTick();

		const event = wrapper.emitted('change') || [];

		expect(event[1][0]).toEqual(rows);
	});

	it('test update Field before editing', async() => {
		const wrapper = createWrapper(filters, rows);

		// Get default fields
		const numberFields = filterStructures.number.fields;

		// Update field
		const result = wrapper.vm.fieldsUpdated(numberFields);

		await wrapper.vm.$nextTick();

		// Result will be undefined beacause there is no editing filter
		expect(result).toEqual(undefined);
	});

	it('test apply filter before editing', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('nbDownload');

		await wrapper.vm.$nextTick();

		// Apply empty filter
		const result = wrapper.vm.applyFilter();

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted().change?.length).toBe(1);

		// Result will be undefined beacause there is no editing filter
		expect(result).toEqual(undefined);
	});

	it('test apply filter type that does not exist', async() => {
		const wrapper = createWrapper({ ...filters, unknowColumn: { type: 'unknow', label: 'test' } } as any, rows);

		const result = wrapper.vm.openFilterDialog('unknowColumn');

		// Result will be undefined beacause there is no editing filter
		expect(result).toEqual(undefined);
	});

	it('test apply filter without current editing filter to set', async() => {
		const wrapper = createWrapper(filters, rows);

		const result = wrapper.vm.applyFilter();

		expect(result).toEqual(undefined);
	});

	it('test unknow column', async() => {
		const wrapper = createWrapper(filters, rows);

		const result = wrapper.vm.openFilterDialog('unknowColumn');

		expect(result).toEqual(undefined);
	});

	it('deleteFilter', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('nbDownload');

		const filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Set filter
		const numberFields = filterEdit?.fields;
		numberFields.numberMax.value = '1';

		wrapper.vm.fieldsUpdated(numberFields);
		wrapper.vm.applyFilter();

		let event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[1][0]).toEqual([rows.find((row) => row.nbDownload === 1)]);

		// Delete filter
		wrapper.vm.deleteFilter(0);

		event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[2][0]).toEqual(rows);
	});

	it('reset the editing filter when apply it without value', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('nbDownload');

		let filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Set filter with one value
		let numberFields = filterEdit?.fields;
		numberFields.numberMax.value = '1';

		wrapper.vm.fieldsUpdated(numberFields);
		wrapper.vm.applyFilter();

		let event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[1][0]).toEqual([rows.find((row) => row.nbDownload === 1)]);

		// Delete filter
		wrapper.vm.openFilterDialog('nbDownload');

		filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Set filter without values
		numberFields = filterEdit?.fields;
		numberFields.numberMax.value = null;
		numberFields.numberMin.value = null;

		wrapper.vm.fieldsUpdated(numberFields);
		wrapper.vm.applyFilter();

		event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[2][0]).toEqual(rows);
	});

	it('deleteAllFilters', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('nbDownload');

		const filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Set filter
		const numberFields = filterEdit?.fields;
		numberFields.numberMax.value = '1';

		wrapper.vm.fieldsUpdated(numberFields);
		wrapper.vm.applyFilter();

		let event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[1][0]).toEqual([rows.find((row) => row.nbDownload === 1)]);

		// Delete all filter
		wrapper.vm.deleteAllFilters();

		event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[2][0]).toEqual(rows);
	});

	it('emits change on apply filter', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('filename');

		const filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Change select value
		const textFields = filterEdit?.fields;
		textFields.select.value = {
			value: ['fichier1.txt']
		} as ChoiceValue;

		wrapper.vm.fieldsUpdated(textFields);
		wrapper.vm.applyFilter();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[1][0]).toEqual([rows.find((row) => row.filename === 'fichier1.txt')]);
	});

	it('edit active filter', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('filename');

		const filterEdit = wrapper.vm.filterTypeEdit as FilterStructure;

		// Change select value
		const textFields = filterEdit?.fields;
		textFields.select.value = {
			value: ['fichier1.txt']
		} as ChoiceValue;

		// Set active Filter
		wrapper.vm.fieldsUpdated(textFields);
		wrapper.vm.applyFilter();

		wrapper.vm.openFilterDialog('filename');

		textFields.select.value = {
			value: ['fichier2.txt']
		} as ChoiceValue;

		// Set active Filter
		wrapper.vm.fieldsUpdated(textFields);
		wrapper.vm.applyFilter();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[2][0]).toEqual([rows.find((row) => row.filename === 'fichier2.txt')]);
	});
});
