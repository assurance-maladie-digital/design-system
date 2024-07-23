import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';

import CookiesTable from '../';

import { cookies } from '../../tests/fixtures';

describe('cookiesTable', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(CookiesTable, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        items: cookies,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
