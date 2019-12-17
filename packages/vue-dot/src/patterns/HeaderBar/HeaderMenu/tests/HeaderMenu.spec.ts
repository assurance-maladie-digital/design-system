import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import HeaderBarMenu from '../HeaderMenu.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderMenu test', () => {
	it('renders connected correctly', async() => {
		// Mount component
		wrapper = mountComponent(HeaderBarMenu, {
			propsData: {
				firstName: 'Prénom',
				lastName: 'nom',
				loggedIn: true,
				actionsList: ['text1', 'text2'],
				info: 'information supplémentaire'
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();

		// click open menu for test action
		wrapper.find('[data-test="buttonMenu"]').trigger('click');

		await Vue.nextTick();

		// click action 0 text1
		wrapper.find('[data-test="itemAction-0"]').trigger('click');

		await Vue.nextTick();

		// click open menu for logout
		wrapper.find('[data-test="buttonMenu"]').trigger('click');

		await Vue.nextTick();

		// logout
		wrapper.find('[data-test="itemLogout"]').trigger('click');
	});

	it('renders not connected', () => {
		// Mount component
		wrapper = mountComponent(HeaderBarMenu, {
			propsData: {
				actionsList: ['text1', 'text2'],
				firstName: 'Prénom',
				lastName: 'nom',
				info: 'information supplémentaire'
			}
		});

		expect(wrapper.text()).not.toBe('Prénom');
		expect(wrapper.text()).not.toBe('nom');
		expect(html(wrapper)).toMatchSnapshot();
	});
});
