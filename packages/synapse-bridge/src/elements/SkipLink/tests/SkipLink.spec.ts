import { afterEach, describe, expect, it, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import SkipLink from '../';

describe('skipLink', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders correctly', () => {
    const wrapper = shallowMount(SkipLink);

    expect(wrapper).toMatchSnapshot();
  });

  it('focuses the skip link on route change', async () => {
    const wrapper = shallowMount(SkipLink);
    const focusSpy = vi.fn()

		;(wrapper.vm.$refs.skipLinkSpan as HTMLLinkElement).focus = focusSpy;

    // @ts-expect-error - we're testing a private method
    wrapper.vm.$options.watch.$route.call(wrapper.vm);

    await wrapper.vm.$nextTick();

    expect(focusSpy).toHaveBeenCalled();
  });
});
