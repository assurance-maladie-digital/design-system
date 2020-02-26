import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FormSection from '../../FormSection';
import FormSectionGroup from '../';

import { sectionGroup } from '../tests/data/sectionGroup';

Vue.component('FormSection', FormSection);

let wrapper: Wrapper<Vue>;

// Tests
describe('form section group', () => {
	it('show a form section group with multiple section', () => {
		// Mount component
		wrapper = mountComponent(FormSectionGroup, {
			propsData: {
				sectionGroup: sectionGroup
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
