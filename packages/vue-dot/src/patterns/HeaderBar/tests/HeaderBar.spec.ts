import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import HeaderBar from '../HeaderBar.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderBar test', () => {
	it('renders correctly with all option', () => {
		// Mount component
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				value : 2,
				app: true,
				title: 'Titre',
				navigationList: ['onglet1', 'onglet2', 'onglet3', 'onglet4', 'onglet5'],
				actionsList: ['test1', 'test2'],
				breadcrumb: 'sous projet',
				back: true,
				searchable: true,
				hideUserIcon: false,
				loggedIn: true,
				firstname: 'Prénom',
				lastname: 'nom',
				info: 'info supplémentaire'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();

	});

});
