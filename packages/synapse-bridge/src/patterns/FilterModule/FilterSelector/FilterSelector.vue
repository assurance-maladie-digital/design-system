<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import { mdiFilterVariant } from '@mdi/js';
import { customizable } from '../../../mixins/customizable';
import { config } from './config';
import { locales } from './locales';

import type { Field } from '@/form-builder/FormField/types';

export default defineComponent({
  mixins: [customizable(config)],
  props: {
    filters: {
      type: Array as PropType<Field[]>,
      required: true,
    },
  },
  emits: ['filterSelected'],
  data() {
    return {
      locales,
      filterIcon: mdiFilterVariant,
    };
  },
  methods: {
    emitFilterSelectedEvent(index: number): void {
      this.$emit('filterSelected', index);
    },
  },
});
</script>

<template>
  <VMenu v-bind="options.menu">
    <template #activator="{ props }">
      <VBtn
        v-bind="{
          ...props,
          ...options.btn,
        }"
      >
        <VIcon v-bind="options.icon">
          {{ filterIcon }}
        </VIcon>

        {{ locales.filters }}
      </VBtn>
    </template>

    <VList v-bind="options.list">
      <VListItem
        v-for="(item, index) in filters"
        :key="index"
        v-bind="options.listItem"
        @click="emitFilterSelectedEvent(index)"
      >
        {{ item.fieldOptions?.filterTitle }}
      </VListItem>
    </VList>
  </VMenu>
</template>
