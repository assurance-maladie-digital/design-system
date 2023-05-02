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
				listTitle: 'Santé',
				items: [
					{
						text: 'Mon espace santé',
						href: 'https://www.ameli.fr/assure/sante/mon-espace-sante'
					},
					{
						text: 'Accomplir les bons gestes',
						href: 'https://www.ameli.fr/assure/sante/bons-gestes'
					}
				]
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
