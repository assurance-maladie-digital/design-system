import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@cnamts/vue-dot/tests';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import FormBuilder from '../';

import { addressForm } from './data/addressForm';
import { questionForm } from './data/questionForm';

let wrapper: Wrapper<Vue>;

// Tests
describe('FormBuilder', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FormBuilder, {
			propsData: {
				form: addressForm
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with all fields', () => {
		// Mount component
		wrapper = mountComponent(FormBuilder, {
			propsData: {
				form: questionForm
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
