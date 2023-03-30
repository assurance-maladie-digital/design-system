import Vue from 'vue';

import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import CollapsibleList from '../';

let wrapper: Wrapper<Vue>;

describe('CollapsibleList', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(CollapsibleList, {
			propsData: {
				items: [
					{
						text: 'Item 1',
						route: '/item1'
					},
					{
						text: 'Item 2',
						route: '/item2'
					}
				]
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
