import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FormBuilder from '../../FormBuilder';
import LayoutSection from '../layouts/LayoutSection.vue';
import LayoutSections from '../layouts/LayoutSections.vue';

import { questionnaire } from './data/questionnaire';

Vue.component('FormBuilder', FormBuilder);
Vue.component('LayoutSection', LayoutSection);

let wrapper: Wrapper<Vue>;

// Tests
describe('Sections layout', () => {
	it('show multiple section layout', () => {
		// Mount component
		wrapper = mountComponent(LayoutSections, {
			propsData: {
				sections: questionnaire.sections
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
