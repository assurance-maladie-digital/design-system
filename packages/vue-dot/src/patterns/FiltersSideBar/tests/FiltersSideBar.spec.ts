import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import FilterSideBar from '../';
import ChipList from '../../../elements/ChipList';

Vue.component('ChipList', ChipList);

let wrapper: Wrapper<Vue>;

describe('FilterSideBar', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FilterSideBar, {
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
		wrapper = mountComponent(FilterSideBar, {
			propsData: {
				value: [
					{
						name: 'name',
						label: 'Nom',
						value: 'John Doe'
					}
				]
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with multiple active filters', () => {
		wrapper = mountComponent(FilterSideBar, {
			propsData: {
				value: [
					{
						name: 'name',
						label: 'Nom',
						value: 'John Doe'
					},
					{
						name: 'age',
						label: 'Âge',
						value: '18'
					}
				]
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
