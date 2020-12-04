import { FieldValue } from './../../../../../../form-builder/src/components/FormField/types.d';
import { ChoiceValue } from '@cnamts/form-builder/src/components/FormField/types';
import { FilterStructure } from './../../types.d';
import { Fields } from '@cnamts/form-builder/src/components/FormFieldList/types';
import { filterStructures } from './../../filterStructures';

import { deepCopy } from '@cnamts/vue-dot/src/helpers/deepCopy';

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
	},
	{
		filename: 'fichier3.txt',
		nbDownload: 3,
		date: '22/10/2020'
	}
];

/** Create the wrapper */
function createWrapper(rows: Rows, filters: Filters) {
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
	it('emits change event', async() => {
		const wrapper = createWrapper(rows, filters);

		wrapper.vm.openFilterDialog('filename');

		const filterEdit = deepCopy(wrapper.vm.filterTypeEdit) as FilterStructure;

		// Change select value
		const textFields = filterEdit?.fields;
		textFields.select.value = {
			value: ['fichier1.txt']
		} as ChoiceValue;

		console.log(filterEdit.fields.select.value);

		wrapper.vm.fieldsUpdated(textFields);

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.filterTypeEdit).toEqual(filterEdit);

		wrapper.vm.applyFilter();

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('change')).toBeTruthy();
		const event = wrapper.emitted('change') || [];

		await wrapper.vm.$nextTick();

		expect(event[0][0]).toEqual([rows.find((row) => row.filename === 'fichier1.txt')]);
	});
});
