import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import HeaderBarTool from '../HeaderToolBar.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderBarTool test', () => {
	it('renders with all info correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderBarTool, {
			propsData: {
				breadcumb: 'projet',
				back: true,
				searchable: true,
				navigationList: ['onglet1', 'onglet2'],
				info: 'information supplémentaire'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

});
