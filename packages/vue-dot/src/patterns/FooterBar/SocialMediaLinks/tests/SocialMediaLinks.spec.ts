import Vue from 'vue';

import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import SocialMediaLinks from '../';

let wrapper: Wrapper<Vue>;

describe('SocialMediaLinks', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(SocialMediaLinks);

		expect(wrapper).toMatchSnapshot();
	});
});
