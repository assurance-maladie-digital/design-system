import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DialogBox from '../../../elements/DialogBox';
import FilterModule from '../';
import { vuetify } from '@tests/unit/setup';
import { VBtn, VCard, VList, VListItem, VTextField } from 'vuetify/components';

describe('FilterModule', () => {
	it('renders correctly closed', () => {
		const wrapper = mount(FilterModule, {
			stubs: {
				DialogBox
			},
			propsData: {
				filters: []
			},
			global: {
				plugins: [vuetify]
			}
		});

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.findComponent(VList).exists()).toBe(false);
		expect(wrapper.findComponent(VBtn).exists()).toBe(true);
	});

	it('renders correctly opened', async () => {
		const wrapper = mount(FilterModule, {
			propsData: {
				filters: []
			},
			global: {
				plugins: [vuetify],
			}
		});

		await wrapper.find('button').trigger('click');

		expect(wrapper.findComponent(VList).exists()).toBe(true);
	});

	it('renders correctly with filters', async () => {
		const wrapper = mount(FilterModule, {
			propsData: {
				filters: [
					{
						type: 'text',
						title: 'Filter 1',
						value: 'filter1',
						fieldOptions: {
							filterTitle: 'Filter 1',
						}
					},
					{
						type: 'text',
						title: 'Filter 2',
						value: 'filter2',
						fieldOptions: {
							filterTitle: 'Filter 2',
						}
					},
				]
			},
			global: {
				plugins: [vuetify],
			}
		});

		await wrapper.find('button').trigger('click');

		expect(wrapper.findComponent(VList).exists()).toBe(true);
		expect(wrapper.findAllComponents(VListItem).length).toBe(2);
		expect(wrapper.findComponent(VList).text()).toContain('Filter 1');
	});

	it('open a filter correctly', async () => {
		const wrapper = mount(FilterModule, {
			propsData: {
				filters: [
					{
						type: 'text',
						title: 'Filter 1',
						value: 'filter1'
					},
					{
						type: 'text',
						title: 'Filter 2',
						value: 'filter2'
					},
				]
			},
			global: {
				plugins: [vuetify],
			}
		});

		await wrapper.find('button').trigger('click');
		await wrapper.findAllComponents(VListItem).at(0)!.trigger('click');

		expect(wrapper.findComponent(VTextField).exists()).toBe(true);
	});

	it('add the filter and emit a "filter-list" event', async () => {
		const wrapper = mount(FilterModule, {
			propsData: {
				filters: [
					{
						type: 'text',
						title: 'Filter 1',
					},
					{
						type: 'text',
						title: 'Filter 2',
					},
				]
			},
			global: {
				plugins: [vuetify],
			}
		});

		await wrapper.find('button').trigger('click');
		await wrapper.findAllComponents(VListItem).at(0)!.trigger('click');
		await wrapper.findComponent(VTextField).setValue('new filter');
		await wrapper.findComponent(VCard).find('.vd-filter-module-dialog-actions button').trigger('click');

		expect(wrapper.emitted('filter-list')).toBeTruthy();
		expect(wrapper.emitted('filter-list')![0]![0]).toEqual([
			{
				type: 'text',
				title: 'Filter 1',
				fieldOptions: undefined,
				value: 'new filter'
			},
			{ type: 'text', title: 'Filter 2' }
		]);
		expect(wrapper.find('.vd-filter-module button').text()).toContain('1');
	});

	it('update the filter and emit a "filter-list" event', async () => {
		const wrapper = mount(FilterModule, {
			propsData: {
				filters: [
					{
						type: 'text',
						title: 'Filter 1',
						value: 'filter1'
					},
					{
						type: 'text',
						title: 'Filter 2',
						value: 'filter2'
					},
				]
			},
			global: {
				plugins: [vuetify],
			}
		});

		await wrapper.find('button').trigger('click');
		await wrapper.findAllComponents(VListItem).at(0)!.trigger('click');
		await wrapper.findComponent(VTextField).setValue('new filter');
		await wrapper.findComponent(VCard).find('.vd-filter-module-dialog-actions button').trigger('click');

		expect(wrapper.emitted('filter-list')).toBeTruthy();
		expect(wrapper.emitted('filter-list')![0]![0]).toEqual([
			{
				type: 'text',
				title: 'Filter 1',
				fieldOptions: undefined,
				value: 'new filter'
			},
			{ type: 'text', title: 'Filter 2', value: 'filter2' }
		]);

		await wrapper.find('button').trigger('click');
		await wrapper.findAllComponents(VListItem).at(0)!.trigger('click');
		await wrapper.findComponent(VTextField).setValue('new filter 2');
		await wrapper.findComponent(VCard).find('.vd-filter-module-dialog-actions button').trigger('click');

		expect(wrapper.emitted('filter-list')).toBeTruthy();
		expect(wrapper.emitted('filter-list')![1]![0]).toEqual([
			{
				type: 'text',
				title: 'Filter 1',
				fieldOptions: undefined,
				value: 'new filter 2'
			},
			{ type: 'text', title: 'Filter 2', value: 'filter2' }
		]);
	});

	it('remove the filter and emit a "filter-list" event', async () => {
		const wrapper = mount(FilterModule, {
			propsData: {
				filters: [
					{
						type: 'text',
						title: 'Filter 1',
						value: null
					},
					{
						type: 'text',
						title: 'Filter 2',
						value: null
					},
				]
			},
			global: {
				plugins: [vuetify],
			}
		});

		await wrapper.find('button').trigger('click');
		await wrapper.findAllComponents(VListItem)
			.at(0)!
			.trigger('click');
		await wrapper.findComponent(VTextField).setValue('new filter');
		await wrapper.findComponent(VCard)
			.find('.vd-filter-module-dialog-actions button')
			.trigger('click');

		expect((wrapper.emitted('filter-list')![0]![0] as any)![0]!.value).toBe('new filter');

		await wrapper.find('.vd-filter-module button').trigger('click');

		await wrapper.findAllComponents(VListItem)
			.at(0)!
			.findAll('button')!
			.at(1)!
			.trigger('click');

		expect((wrapper.emitted('filter-list')![1]![0])).toEqual([]);
	});


	it('remove the filter and emit a "filter-list" event with the other filter in', async () => {
		const wrapper = mount(FilterModule, {
			propsData: {
				filters: [
					{
						type: 'text',
						title: 'Filter 1',
						value: null
					},
					{
						type: 'text',
						title: 'Filter 2',
						value: null
					},
				]
			},
			global: {
				plugins: [vuetify],
			}
		});
		// add filter 1
		await wrapper.find('button').trigger('click');
		await wrapper.findAllComponents(VListItem)
			.at(0)!
			.trigger('click');
		await wrapper.findComponent(VTextField).setValue('new filter');
		await wrapper.findComponent(VCard)
			.find('.vd-filter-module-dialog-actions button')
			.trigger('click');

		expect((wrapper.emitted('filter-list')![0]![0] as any)![0]!.value).toBe('new filter');

		// add filter 2
		await wrapper.find('button:nth-child(2)').trigger('click');
		await wrapper
			.findAllComponents(VList).at(0)
			?.findAllComponents(VListItem).at(1)!
			.trigger('click');

		await wrapper.findComponent(VTextField).setValue('new filter 2');
		await wrapper.findComponent(VCard).find('.vd-filter-module-dialog-actions button').trigger('click');
		expect((wrapper.emitted('filter-list')![1]![0] as any)![1]!.value).toBe('new filter 2');

		// remove filter 1
		await wrapper.find('.vd-filter-module button').trigger('click');
		await wrapper.findAllComponents(VListItem)
			.at(0)!
			.findAll('button')!
			.at(1)!
			.trigger('click');

		expect((wrapper.emitted('filter-list')![2]![0])).toEqual([
			{
				"title": "Filter 1",
				"type": "text",
				"value": null,
			},
			{
				"title": "Filter 2",
				"type": "text",
				"value": "new filter 2",
			},
		]);
	});

	it('update the filter and emit a "filter-list" event', async () => {
		const wrapper = mount(FilterModule, {
			propsData: {
				filters: [
					{
						type: 'text',
						title: 'Filter 1',
						value: null
					},
					{
						type: 'text',
						title: 'Filter 2',
						value: null
					},
				]
			},
			global: {
				plugins: [vuetify],
			}
		});

		await wrapper.find('button').trigger('click');
		await wrapper.findAllComponents(VListItem).at(0)!.trigger('click');
		await wrapper.findComponent(VTextField).setValue('new filter');
		await wrapper.findComponent(VCard).find('.vd-filter-module-dialog-actions button').trigger('click');

		await wrapper.find('.vd-filter-module button').trigger('click');
		expect((wrapper.emitted('filter-list')![0]![0] as any)![0]!.value).toBe('new filter');

		await wrapper.find('button:nth-child(2)').trigger('click');
		await wrapper
			.findAllComponents(VList).at(1)
			?.findAllComponents(VListItem).at(1)!
			.trigger('click');
		await wrapper.findComponent(VTextField).setValue('lorem ipsum');
		await wrapper.findComponent(VCard).find('.vd-filter-module-dialog-actions button').trigger('click');
		expect((wrapper.emitted('filter-list')![1]![0] as any)![1]!.value).toBe('lorem ipsum');

		await wrapper.find('.vd-filter-module button').trigger('click');
		await wrapper
			.findAllComponents(VList).at(0)
			?.findAllComponents(VListItem)
			.at(0)!
			.findAll('button')!
			.at(0)!
			.trigger('click');
		expect(wrapper.findComponent(VCard).exists()).toBe(true);
		await wrapper.findComponent(VCard).find('input').setValue('new filter 2');
		await wrapper.findComponent(VCard).find('.vd-filter-module-dialog-actions button').trigger('click');

		expect((wrapper.emitted('filter-list')![2]![0] as any)![0]!.value).toBe('new filter 2');
		expect((wrapper.emitted('filter-list')![2]![0] as any)![1]!.value).toBe('lorem ipsum');
	});

	it('reset all the filters', async () => {
		const wrapper = mount(FilterModule, {
			propsData: {
				filters: [
					{
						type: 'text',
						title: 'Filter 1',
						value: null
					},
					{
						type: 'text',
						title: 'Filter 2',
						value: null
					},
				]
			},
			global: {
				plugins: [vuetify],
			}
		});

		await wrapper.find('button').trigger('click');
		await wrapper.findAllComponents(VListItem).at(0)!.trigger('click');
		await wrapper.findComponent(VTextField).setValue('value 1');
		await wrapper.findComponent(VCard).find('.vd-filter-module-dialog-actions button').trigger('click');

		await wrapper.find('.vd-filter-module button').trigger('click');
		await wrapper.find('button:nth-child(2)').trigger('click');
		await wrapper
			.findAllComponents(VList).at(1)
			?.findAllComponents(VListItem).at(1)!
			.trigger('click');
		await wrapper.findComponent(VTextField).setValue('value 2');
		await wrapper.findComponent(VCard).find('.vd-filter-module-dialog-actions button').trigger('click');
		await wrapper.find('.vd-filter-module button .v-icon[role="button"]').trigger('click');

		expect(wrapper.emitted('filter-list')![2]![0]).toEqual([]);
	});
});
