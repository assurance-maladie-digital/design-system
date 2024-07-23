import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';
import FormField from '../../FormField.vue';

describe('textAreaField', () => {
  it('should render correctly', () => {
    const wrapper = mount(FormField, {
      props: {
        modelValue: {
          title: 'Qui êtes vous ?',
          type: 'textarea',
        },
      },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with the fieldOptions props', () => {
    const wrapper = mount(FormField, {
      props: {
        modelValue: {
          title: 'Qui êtes vous ?',
          type: 'textarea',
          fieldOptions: {
            color: 'red',
          },
        },
      },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.html()).toContain('red');
  });
});
