import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import ContextualMenu from '..';

let wrapper: Wrapper<Vue>;

describe('ContextualMenu', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(ContextualMenu,{
			propsData: {
				tabs: [
					{
						name: 'onglet-1',
						label: 'Onglet 1',
						route: '#onglet-1'
					},
					{
						name: 'onglet-2',
						label: 'Onglet 2',
						route: '#onglet-2'
					}
				]
			}
		});
		expect(html(wrapper)).toMatchSnapshot();
	});
});
