import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';
import { VAutocomplete } from 'vuetify/lib/components/index.mjs';
import ChoiceAutocompleteField from '../ChoiceAutocompleteField.vue';

describe('choiceAutocompleteField', () => {
  it('emits an event when the value is updated', async () => {
    const wrapper = mount(ChoiceAutocompleteField, {
      global: {
        plugins: [vuetify],
      },
      props: {
        items: [
          {
            text: 'S',
            value: 0,
          },
          {
            text: 'M',
            value: 1,
          },
          {
            text: 'Autre',
            value: 'autre',
          },
        ],
        modelValue: 1,
      },
    });

    const VAutocompleteField = wrapper.findComponent(VAutocomplete);
    await VAutocompleteField.setValue(0);
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(wrapper.emitted()['update:modelValue']).toEqual([[0]]);
  });
});
