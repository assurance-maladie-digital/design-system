import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import LangBtn from '../';

let wrapper: Wrapper<Vue>;

describe('LangBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(LangBtn, {
			propsData: {
				availableLanguages: ['fr', 'en']
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
