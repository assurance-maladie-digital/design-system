import Vue from 'vue';
import Vuetify from 'vuetify';

import {
	Wrapper,
	html,
	shallowMount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins,
	mockTranslations
} from '@cnamts/vue-dot/src/helpers/testUtils';

import About from '../About.vue';<% if (i18n) { %>

import { LinkItem } from '@/types';

const links: LinkItem[] = [
	{
		title: 'Test',
		links: [
			{
				id: 0,
				url: 'https://example.com/',
				name: 'Test website'
			}
		]
	}
];<% } %>

describe('About', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = shallowMount(About, {
			localVue,
			vuetify<% if (i18n) { %>,
			mocks: mockTranslations<LinkItem[]>({
				'views.about.links': links
			})<% } %>
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
