import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import LangBtn from '../';

let wrapper: Wrapper<Vue>;

describe('LangBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(LangBtn, {
			propsData: {
				availableLanguages: ['fr', 'en']
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
