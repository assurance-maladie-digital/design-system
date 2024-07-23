<script lang="ts">
import { defineComponent } from 'vue';

import ChoiceComponent from '../mixins/choiceComponent';
import SelectBtnField from '@/patterns/SelectBtnField';

import type { SelectBtnItem } from '@/patterns/SelectBtnField/types';

export default defineComponent({
  components: {
    SelectBtnField,
  },
  mixins: [ChoiceComponent],
  computed: {
    filteredItems(): SelectBtnItem[] {
      // Rename alone prop to unique for backward compatibility
      return this.items.map((item) => {
        if (item.alone) {
          delete item.alone
          ;(item as SelectBtnItem).unique = true;
        }

        return item as SelectBtnItem;
      });
    },
  },
});
</script>

<template>
  <SelectBtnField
    v-bind="options"
    :model-value="choiceFieldValue"
    :items="filteredItems"
    :multiple="multiple"
    :error-messages="errorMessages"
    @update:model-value="emitChangeEvent"
  />
</template>
