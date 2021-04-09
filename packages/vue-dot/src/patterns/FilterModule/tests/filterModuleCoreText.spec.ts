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
describe('FilterWorkflowCoreText', () => {

    it('test type text: select multiple items', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('filename');

		const filterEdit = filterStructures.text as FilterStructure;

		// Change select value
		const textFields = filterEdit?.fields;
		textFields.select.value = {
			value: ['fichier1.txt', 'fichier2.txt']
		} as ChoiceValue;

		wrapper.vm.fieldsUpdated(textFields);

		wrapper.vm.applyFilter();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[1][0]).toEqual(rows.filter((row) => {
				if (row.filename === 'fichier1.txt' || row.filename === 'fichier2.txt') {
					return true;
				}
				return false;
			}
		));
	});

    it('test type text: mock filter structure without fieldOptions', async() => {
		const wrapper = createWrapper(filters, rows);

		const newFilterStructures = filterStructures;

		newFilterStructures.text.fields.select.fieldOptions = undefined;

		jest.fn(() => {
			return { filterStructures: newFilterStructures };
		});

		wrapper.vm.openFilterDialog('filename');

	});

	it('test type text: item value null', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.activeFilters = [
			{
				filterName: 'filename',
				label: 'fichier',
				text: 'fichier1.txt sélectionné',
				type: 'text',
				values: { select: null }
			}
		];

		await wrapper.vm.$nextTick();

		const result = wrapper.vm.checkItemValues({ filename: 'fichier1.txt' });

		expect(result).toBeTruthy;
    });

    it('test type text: no select items', async() => {
		const wrapper = createWrapper(filters, rows);

		wrapper.vm.openFilterDialog('filename');

		const filterEdit = filterStructures.text as FilterStructure;

		// Change select value
		const textFields = filterEdit?.fields;
		textFields.select.value = {
			value: []
		} as ChoiceValue;

		wrapper.vm.fieldsUpdated(textFields);

		wrapper.vm.applyFilter();

		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event.length).toBe(1);
    });
});
