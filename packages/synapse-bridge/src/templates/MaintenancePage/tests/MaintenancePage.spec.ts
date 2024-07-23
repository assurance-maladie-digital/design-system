import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import MaintenancePage from '../';

describe('maintenancePage', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(MaintenancePage);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
