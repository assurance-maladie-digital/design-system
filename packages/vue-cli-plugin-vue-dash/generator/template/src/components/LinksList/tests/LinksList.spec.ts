import Vue from 'vue';
import Vuetify from 'vuetify';

import {
	Wrapper,
	html,
	shallowMount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins,
	installRouter
} from '@cnamts/vue-dot/src/helpers/testUtils';

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
	installRouter(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = shallowMount(LinksList, {
			localVue,
			vuetify,
			propsData: {
				links
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
