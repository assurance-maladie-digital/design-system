import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';

import CustomIcon from '../';

describe('customIcon', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(CustomIcon, {
      global: {
        plugins: [vuetify],
      },
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders correctly without icon', async () => {
    await wrapper.setProps({ icon: undefined });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with icon', async () => {
    await wrapper.setProps({ icon: 'digital' });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with icon and size', async () => {
    await wrapper.setProps({ icon: 'digital', small: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with icon and color', async () => {
    await wrapper.setProps({ icon: 'digital', small: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with icon, size and color', async () => {
    await wrapper.setProps({ icon: 'digital', small: true, color: 'red' });

    expect(wrapper).toMatchSnapshot();
  });

  it('getIcon is called', async () => {
    const getIcon = vi.spyOn(wrapper.vm, 'getIcon');
    await wrapper.setProps({ icon: 'digital' });

    expect(getIcon).toHaveBeenCalled();
  });

  it('getIcon is called with undefined icon', async () => {
    const getIcon = vi.spyOn(wrapper.vm, 'getIcon');
    await wrapper.setProps({ icon: undefined });

    expect(getIcon).toHaveReturnedWith(undefined);
  });

  it('getThemeIcon is called with digital icon', async () => {
    const getThemeIcon = vi.spyOn(wrapper.vm, 'getThemeIcon');
    await wrapper.setProps({ icon: 'digital' });

    expect(getThemeIcon).toHaveBeenCalled();
    expect(wrapper.vm.getThemeIcon()).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" focusable="false"><path d="M69 35c0 18.8-15.4 34-34.5 34C15.5 69 0 53.8 0 35S15.4 1 34.5 1C53.5 1 69 16.2 69 35" fill="currentColor"/><path d="M23.6 19.3l6.8 3.9v-7.8l-6.8 3.9zm8.6 7v18.5l7.7-4.5v-9.6l-7.7-4.5zm-9.5 25l8.6 4.8 18-10.3V25l-17.1-9.7v8.8l9 5.2c.3.2.5.4.5.8v10.6c0 .4-.2.6-.5.8L31.7 47c-.2.2-.6.2-.8 0a.9.9 0 01-.5-.7V25.2l-7.7-4.4v30.4zm8.6 6.7l-.4-.1-9.5-5.4a.9.9 0 01-.4-.8V19.3c0-.3.2-.6.4-.8l9.5-5.4.4-.1h.3l.1.1L50.6 24c.2.1.4.4.4.7v21.7c0 .3-.2.6-.4.7L31.7 58l-.4.1z" fill="#fff"/></svg>',
    );
  });

  it('getThemeIcon is not called with undefined icon', async () => {
    const getThemeIcon = vi.spyOn(wrapper.vm, 'getThemeIcon');
    await wrapper.setProps({ icon: undefined });

    expect(getThemeIcon).not.toHaveBeenCalled();
  });

  it('getThemeIcon is called with fake icon', async () => {
    const getThemeIcon = vi.spyOn(wrapper.vm, 'getThemeIcon');
    await wrapper.setProps({ icon: 'test' });

    expect(getThemeIcon).toHaveBeenCalled();
    expect(wrapper.vm.getThemeIcon()).toBe(undefined);
  });

  it('themeIcon is true with digital icon', async () => {
    await wrapper.setProps({ icon: 'digital' });

    expect(wrapper.vm.themeIcon).toBe(true);
  });

  it('themeIcon is false with undefined icon', async () => {
    await wrapper.setProps({ icon: undefined });

    expect(wrapper.vm.themeIcon).toBe(false);
  });
});
