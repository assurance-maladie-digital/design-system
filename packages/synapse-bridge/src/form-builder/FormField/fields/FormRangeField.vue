<script lang="ts">
import { defineComponent } from 'vue';

import FieldComponent from '../mixins/fieldComponent';
import RangeField from '@/patterns/RangeField';

export default defineComponent({
  components: {
    RangeField,
  },
  mixins: [FieldComponent],
  emits: ['update:modelValue'],
  computed: {
    value() {
      return Array.isArray(this.field.value)
        ? this.field.value.filter(el => !Number.isNaN(el))
        : null;
    },
  },
});
</script>

<template>
  <RangeField
    v-bind="field.fieldOptions"
    :min="field.min"
    :max="field.max"
    :model-value="value"
    :color="field.fieldOptions?.color ?? 'primary'"
    @update:model-value="emitChangeEvent"
  />
</template>
