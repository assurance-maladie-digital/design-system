<script lang="ts">
import { defineComponent } from 'vue';

import { vMaska } from 'maska';
import FieldComponent from '../mixins/fieldComponent';

export default defineComponent({
  directives: { maska: vMaska },
  mixins: [FieldComponent],
  emits: ['update:modelValue'],
  computed: {
    maskaOptions(): any {
      return {
        mask: (this.field.fieldOptions?.mask as string) || '',
      };
    },
  },
});
</script>

<template>
  <VTextField
    v-maska:[maskaOptions]
    v-bind="field.fieldOptions as any"
    :model-value="field.value"
    class="vd-form-input"
    :color="field.fieldOptions?.color ?? 'primary'"
    @update:model-value="emitChangeEvent"
  />
</template>
