import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';

import FranceConnectBtn from '../';

describe('franceConnectBtn', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(FranceConnectBtn, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        href: 'https://app.franceconnect.gouv.fr/',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with connect-plus', () => {
    const wrapper = shallowMount(FranceConnectBtn, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        href: 'https://app.franceconnect.gouv.fr/',
        connectPlus: true,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
