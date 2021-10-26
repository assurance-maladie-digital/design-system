import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@cnamts/vue-dot/tests/unit';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import FormBuilder from '../';

import { questionForm } from './data/questionForm';

let wrapper: Wrapper<Vue>;

// Tests
describe('FormBuilder', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FormBuilder, {
			propsData: {
				form: questionForm
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
