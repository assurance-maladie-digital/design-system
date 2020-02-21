import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FormBuilder from '../../FormBuilder';
import FormSection from '../forms/FormSection.vue';

Vue.component('FormBuilder', FormBuilder);

import { questionnaire } from './data/questionnaire';

let wrapper: Wrapper<Vue>;

// Tests
describe('Section form', () => {
	it('show a single section form', () => {
		// Mount component
		wrapper = mountComponent(FormSection, {
			propsData: {
				section: questionnaire.sections.section1
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
