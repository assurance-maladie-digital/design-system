import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import { vuetify } from '@tests/unit/setup';
import SocialMediaLinks from '../';

describe('socialMediaLinks', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(SocialMediaLinks, {
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
