import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import HeaderBarDrawer from '../HeaderDrawer.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderBarDrawer test', () => {
	it('renders with all info correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderBarDrawer, {
			propsData: {
				value: true,
				firstName: 'Prénom',
				lastName: 'nom',
				actionsList: ['text1', 'text2'],
				info: 'information supplémentaire'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

});
