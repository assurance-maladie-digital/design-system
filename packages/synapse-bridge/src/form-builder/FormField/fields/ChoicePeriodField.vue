<script lang="ts">
import { defineComponent } from 'vue';

import FieldComponent from '../mixins/fieldComponent';
import PeriodField from '@/patterns/PeriodField';

export default defineComponent({
  components: {
    PeriodField,
  },
  mixins: [FieldComponent],
  emits: ['update:modelValue'],
});
</script>

<template>
  <PeriodField
    v-bind="field.fieldOptions"
    :model-value="field.value"
    :vuetify-options="field.fieldOptions"
    outlined
    @update:model-value="emitChangeEvent"
  />
</template>
