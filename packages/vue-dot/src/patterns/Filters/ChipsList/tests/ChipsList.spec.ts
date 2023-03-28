import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import ChipsList from '..';

let wrapper: Wrapper<Vue>;

describe('ChipsList', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(ChipsList, {
			propsData: {
				chipsLimit: 4,
				filter: {
					name: 'nom',
					label: 'Nom',
					chips: []
				}
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
