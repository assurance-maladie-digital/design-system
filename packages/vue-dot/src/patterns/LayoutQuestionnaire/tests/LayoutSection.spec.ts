import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FormBuilder from '../../FormBuilder';
import LayoutSection from '../layouts/LayoutSection.vue';

Vue.component('FormBuilder', FormBuilder);

import { questionnaire } from './data/questionnaire';

let wrapper: Wrapper<Vue>;

// Tests
describe('Section layout', () => {
	it('show a single section layout', () => {
		// Mount component
		wrapper = mountComponent(LayoutSection, {
			propsData: {
				section: questionnaire.sections.section1
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
