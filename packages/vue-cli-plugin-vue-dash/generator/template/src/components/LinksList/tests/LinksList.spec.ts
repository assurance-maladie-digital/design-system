import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import LinksList from '../';

let wrapper: Wrapper<Vue>;

const links = [
	{
		id: 0,
		url: 'https://github.com/assurance-maladie-digital/design-system',
		name: 'Design System'
	}
];

describe('LinksList', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(LinksList, {
			propsData: {
				links
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
