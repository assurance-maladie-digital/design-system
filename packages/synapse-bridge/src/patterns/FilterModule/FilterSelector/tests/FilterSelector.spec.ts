import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';
import FilterSelector from '../';

describe('filterSelector', () => {
  it('renders correctly', () => {
    const wrapper = mount(FilterSelector, {
      propsData: {
        filters: [],
      },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
