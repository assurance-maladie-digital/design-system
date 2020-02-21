import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FormBuilder from '../../FormBuilder';
import FormSection from '../forms/FormSection.vue';
import FormStep from '../forms/FormStep.vue';

import { questionnaire } from './data/questionnaire';

Vue.component('FormBuilder', FormBuilder);
Vue.component('FormSection', FormSection);

let wrapper: Wrapper<Vue>;

// Tests
describe('Step form', () => {
	it('show multiple section form', () => {
		// Mount component
		wrapper = mountComponent(FormStep, {
			propsData: {
				sections: questionnaire.sections
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
