import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import FormBuilder from '../';

import addressForm from './data/addressForm';
import questionForm from './data/questionForm';

let wrapper: Wrapper<Vue>;

// Tests
describe('FormBuilder', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FormBuilder, {
			propsData: {
				value: addressForm
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with a question layout', () => {
		// Mount component
		wrapper = mountComponent(FormBuilder, {
			propsData: {
				value: questionForm,
				defaultLayout: 'question'
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
