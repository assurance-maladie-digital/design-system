import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import ContextualMenu from '../';

let wrapper: Wrapper<Vue>;

describe('ContextualMenu', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(ContextualMenu,{
			propsData: {
				items: [
					{
						text: 'Titre 1',
						hash: '#example-1'
					},
					{
						text: 'Titre 2',
						hash: '#example-2'
					}
				]
			},
			mocks: {
				$route: {
					hash: ''
				}
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
