<script lang="ts">
import { defineComponent } from 'vue';

import FieldComponent from '../mixins/fieldComponent';
import PasswordField from '@/patterns/PasswordField';

export default defineComponent({
  components: {
    PasswordField,
  },
  mixins: [FieldComponent],
  emits: ['update:modelValue'],
});
</script>

<template>
  <PasswordField
    v-bind="field.fieldOptions"
    :model-value="String(field.value)"
    class="vd-form-input"
    :color="field.fieldOptions?.color ?? 'primary'"
    @update:model-value="emitChangeEvent"
  />
</template>
