import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import {
	Wrapper,
	html,
	mount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins
} from '@/tests-unit/utils';

import LinksList from '../';

const links = [
	{
		id: 0,
		url: 'https://github.com/assurance-maladie-digital/design-system',
		name: 'Design System'
	}
];

describe('LinksList', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = mount(LinksList, {
			propsData: {
				links
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
