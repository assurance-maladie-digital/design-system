import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FormSection from '..';

import { addressForm } from './data/addressForm';
import { questionForm } from './data/questionForm';

let wrapper: Wrapper<Vue>;

// Tests
describe('FormSection', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FormSection, {
			propsData: {
				form: addressForm
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with a question layout', () => {
		// Mount component
		wrapper = mountComponent(FormSection, {
			propsData: {
				title: 'Titre section',
				form: questionForm,
				defaultLayout: 'question'
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
