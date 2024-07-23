import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';

import FormBuilder from '../';
import { questionForm } from './data/questionForm';

describe('formBuilder', () => {
  it('renders correctly', () => {
    const wrapper = mount(FormBuilder, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        modelValue: questionForm,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('handles update:modelValue event', async () => {
    const wrapper = mount(FormBuilder, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        modelValue: questionForm,
      },
    });

    await wrapper.find('input').setValue('test');
    await wrapper.find('input').trigger('blur');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(
      (wrapper.emitted('update:modelValue')![0][0] as any).section1
        .questions.questionString.value,
    ).toBe('test');
  });

  it('emit refresh event', async () => {
    const wrapper = mount(FormBuilder, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        modelValue: questionForm,
      },
    });

    await wrapper.find('input[type="password"]').setValue('test');
    await wrapper.find('input[type="password"]').trigger('blur');

    expect(wrapper.emitted('refresh')).toBeTruthy();
  });
});
