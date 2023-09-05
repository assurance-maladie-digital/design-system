import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import FiltersInline from '../';
import ChipList from '../../../elements/ChipList';

Vue.component('ChipList', ChipList);

let wrapper: Wrapper<Vue>;

describe('FiltersInline', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FiltersInline, {
			propsData: {
				value: [
					{
						name: 'name',
						label: 'Nom'
					}
				]
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with an active filter', () => {
		wrapper = mountComponent(FiltersInline, {
			propsData: {
				value: [
					{
						name: 'name',
						label: 'Nom',
						value: 'John Doe'
					}
				]
			}
		}, true);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with multiple active filters', () => {
		wrapper = mountComponent(FiltersInline, {
			propsData: {
				value: [
					{
						name: 'name',
						label: 'Nom',
						value: 'John Doe'
					},
					{
						name: 'profession',
						label: 'Profession',
						value: [
							'Infirmer',
							'Pharmacien'
						]
					}
				]
			}
		}, true);

		expect(wrapper).toMatchSnapshot();
	});
});
