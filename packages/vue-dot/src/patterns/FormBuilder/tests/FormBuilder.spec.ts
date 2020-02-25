import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FormBuilder from '../../FormBuilder';
import FormSection from '../../FormSection';
import FormSectionGroup from '../../FormSectionGroup';

import { sectionGroup } from '../../FormSectionGroup/tests/data/sectionGroup';
import { questionForm } from './../../FormSection/tests/data/questionForm';

Vue.component('FormSection', FormSection);
Vue.component('FormSectionGroup', FormSectionGroup);

let wrapper: Wrapper<Vue>;

// Tests
describe('form builder', () => {
	it('show a form with multiple section', () => {
		// Mount component
		wrapper = mountComponent(FormBuilder, {
			propsData: {
				sectionGroup: sectionGroup
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
