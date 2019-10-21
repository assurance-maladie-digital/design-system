import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import DataList from '../';

let wrapper: Wrapper<Vue>;

const list = [
	{
		key: 'Civility',
		value: ''
	},
	{
		key: 'Name',
		value: 'Dupont'
	},
	{
		key: 'First name',
		value: 'Paul'
	}
];

// Tests
describe('DataList', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list
			}
		});

		const elExists = wrapper.find('.vd-data-list').exists();
		expect(elExists).toBe(true);

		const titleExists = wrapper.find('h4').exists();
		expect(titleExists).toBe(false);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with a title', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list,
				listTitle: 'Informations'
			}
		});

		const elExists = wrapper.find('h4').exists();
		expect(elExists).toBe(true);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly in column mode', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list,
				column: true
			}
		});

		const elExists = wrapper.find('.vd-column').exists();
		expect(elExists).toBe(true);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly in flex mode', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list,
				flex: true
			}
		});

		const elExists = wrapper.find('.vd-flex').exists();
		expect(elExists).toBe(true);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with an empty list', () => {
		// Mount component
		wrapper = mountComponent(DataList, {
			propsData: {
				list: []
			}
		});

		const elExists = wrapper.find('.vd-field').exists();
		expect(elExists).toBe(false);

		expect(wrapper).toMatchSnapshot();
	});
});
