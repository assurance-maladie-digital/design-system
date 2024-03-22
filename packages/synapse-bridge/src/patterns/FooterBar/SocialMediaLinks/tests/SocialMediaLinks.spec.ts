import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import { vuetify } from '@tests/unit/setup';
import SocialMediaLinks from '..';

describe('SocialMediaLinks', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(SocialMediaLinks, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
