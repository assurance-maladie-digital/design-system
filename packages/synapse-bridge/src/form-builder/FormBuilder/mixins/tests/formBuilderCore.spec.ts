import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { defineComponent } from 'vue';

import FormBuilderCore from '../formBuilderCore';
import type { Field } from '../../../FormField/types';
import type { Form } from '../../types';

const testField: Field = {
  type: 'text',
  value: null,
  fieldOptions: {
    label: 'Test',
  },
};

const testForm: Form = {
  section1: {
    questions: {
      field1: testField,
    },
  },
};

const updatedTestForm: Form = {
  section1: {
    questions: {
      field1: {
        ...testField,
        value: 'test',
      },
    },
  },
};

const updatedField = updatedTestForm.section1.questions;

/** Create the wrapper */
function createWrapper(form: Form) {
  const component = defineComponent({
    mixins: [FormBuilderCore],
    template: '<div />',
  });

  return shallowMount(component, {
    props: {
      modelValue: form,
    },
  });
}

describe('formBuilderCore', () => {
  it('emits change event', async () => {
    const wrapper = createWrapper(testForm);

    wrapper.vm.sectionUpdated(updatedField, 'section1');

    await wrapper.vm.$nextTick();

    const event = wrapper.emitted('update:modelValue') || [];

    expect(event[0][0]).toEqual(updatedTestForm);
  });
});
