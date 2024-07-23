import { describe, expect, it } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';

import { VTooltip } from 'vuetify/lib/components/index.mjs';
import FormField from '../FormField.vue';

const testField = {
  type: 'text',
  value: null,
  fieldOptions: {
    label: 'Classic field',
    variant: 'outlined',
  },
};

describe('formBuilder', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(FormField, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        modelValue: testField,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('emits change event', async () => {
    const wrapper = mount(FormField, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        modelValue: testField,
      },
    });

    await wrapper.find('input').setValue('test');

    expect(wrapper.emitted('update:modelValue')).toEqual([
      [{ ...testField, value: 'test' }],
    ]);
  });

  it('render with a slot', async () => {
    const wrapper = mount(FormField, {
      global: {
        plugins: [vuetify],
      },
      propsData: {
        modelValue: {
          type: 'toto',
          title: 'Title',
          tooltip: 'Tooltip',
          description: 'Description',
        },
      },
      slots: {
        toto: '<div>Custom slot</div>',
      },
    });

    expect(wrapper.html()).toContain('Title');
    expect(wrapper.html()).toContain('Description');
    expect(wrapper.html()).toContain('Custom slot');
    const tooltip = wrapper.findComponent(VTooltip);
    expect(tooltip).toBeTruthy();
  });
});
