import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { Form } from '../types';
import type { Fields } from '../../FormFieldList/types';

export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<Form>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    sectionUpdated(fields: Fields, sectionName: string): void {
      const form = { ...this.modelValue };
      form[sectionName].questions = fields;

      this.$nextTick(() => {
        this.$emit('update:modelValue', form);
      });
    },
  },
});
