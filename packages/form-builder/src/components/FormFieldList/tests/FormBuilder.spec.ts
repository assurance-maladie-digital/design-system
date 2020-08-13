import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@cnamts/vue-dot/tests';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import FormFieldList from '../';

import { questionForm } from '../../FormBuilder/tests/data/questionForm';

let wrapper: Wrapper<Vue>;

// Tests
describe('FormFieldList', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FormFieldList, {
			propsData: {
				fields: questionForm.section1.questions
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
