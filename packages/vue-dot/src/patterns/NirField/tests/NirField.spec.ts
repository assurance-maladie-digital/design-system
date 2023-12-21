import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import NirField from '../';

let wrapper: Wrapper<Vue>;

describe('NirField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(NirField, undefined, true);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with 13 characters', () => {
		wrapper = mountComponent(
			NirField,
			{
				propsData: {
					nirLength: 13
				}
			},
			true
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with a tooltip', () => {
		wrapper = mountComponent(
			NirField,
			{
				propsData: {
					tooltip: 'Information sur le NIR'
				}
			},
			true
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('Displays an error message when the fields are not totaly filled', async() => {
		wrapper = mountComponent(
			NirField,
			{
			},
			true
		);

		document.getSelection = jest.fn(() => null);

		const numberField = wrapper.find('.vd-number-field input');
		const keyField = wrapper.find('.vd-key-field input');

		await numberField.setValue('123');
		await numberField.trigger('keydown.enter');
		await keyField.setValue('1');
		await keyField.trigger('keydown.enter');

		expect(wrapper).toMatchSnapshot();
	});
});
