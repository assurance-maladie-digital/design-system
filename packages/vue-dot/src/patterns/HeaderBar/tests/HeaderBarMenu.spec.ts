import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import HeaderBarMenu from '../HeaderBarMenu.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderBarMenu test', () => {
	it('renders connected correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderBarMenu, {
			propsData: {
				firstname: 'Prénom',
				lastname: 'nom',
				loggedIn: true,
				actionsList: ['text1', 'text2'],
				info: 'information supplémentaire'
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();

		// click menu
		wrapper.find('[data-test="buttonMenu"]').trigger('click');

		// click action 0 text1
		wrapper.find('[data-test="itemAction-0"]').trigger('click');

		// logout
		wrapper.find('[data-test="itemLogout"]').trigger('click');
	});

	it('renders not connected', () => {
		// Mount component
		wrapper = mountComponent(HeaderBarMenu, {
			propsData: {
				actionsList: ['text1', 'text2'],
				firstname: 'Prénom',
				lastname: 'nom',
				info: 'information supplémentaire'
			}
		});

		expect(wrapper.text()).not.toBe('Prénom');
		expect(wrapper.text()).not.toBe('nom');
		expect(html(wrapper)).toMatchSnapshot();
	});
});
