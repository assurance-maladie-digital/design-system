import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import LoginLayout from '..';

let wrapper: Wrapper<Vue>;

// Tests
describe('ErrorPage', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(LoginLayout);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly custom example', () => {
		// Mount component
		wrapper = mountComponent(LoginLayout, {
			propsData: {
				title: 'Pas de connexion',
				description:'description du login',
				usernameLabel: 'Nom d\'utilisateur',
				passwordLabel: 'mot secret',
				createLink: true,
				passwordLink: true,
				loading: true
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
