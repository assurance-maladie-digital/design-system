import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import LoginCard from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('ErrorPage', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(LoginCard);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly custom example', () => {
		// Mount component
		wrapper = mountComponent(LoginCard, {
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
