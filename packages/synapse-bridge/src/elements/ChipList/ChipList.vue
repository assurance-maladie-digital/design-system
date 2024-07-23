<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

import { mdiChevronUp, mdiWindowClose } from '@mdi/js';
import { locales } from './locales';
import type { ChipItem } from './types';

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<ChipItem[]>,
      default: () => [],
    },
    overflowLimit: {
      type: Number,
      default: 4,
    },
  },
  emits: ['remove', 'reset'],
  data() {
    return {
      locales,
      deleteIcon: mdiWindowClose,
      upIcon: mdiChevronUp,
    };
  },
  computed: {
    showOverflowChip(): boolean {
      return this.items.length >= this.overflowLimit;
    },
    overflowText(): string {
      return `+${this.items.length - this.overflowLimit + 1}`;
    },
    filteredItems(): ChipItem[] {
      return this.items.slice(0, this.overflowLimit - 1);
    },
  },
  methods: {
    emitRemoveEvent(item: ChipItem): void {
      this.$emit('remove', item);
    },
    emitResetEvent(): void {
      this.$emit('reset');
    },
  },
});
</script>

<template>
  <div
    v-if="items.length"
    :class="{
      'flex-column': showOverflowChip,
    }"
    class="vd-chip-list d-flex flex-wrap max-width-none mx-n1 mt-n1"
  >
    <div class="d-flex flex-wrap align-center">
      <VChip
        v-for="item in filteredItems"
        :key="item.text"
        class="ma-1"
        color="cyan-darken-40"
        size="small"
        text-color="white"
        variant="flat"
      >
        <div
          class="d-flex align-center ga-sm-1 pl-1"
        >
          <span>{{ item.text }}</span>
          <VBtn
            :aria-label="locales.closeBtnLabel"
            class="vd-remove-chip"
            density="compact"
            icon="mdi-close"
            size="small"
            variant="text"
            @click="emitRemoveEvent(item)"
          >
            <VIcon
              size="default"
            >
              {{ deleteIcon }}
            </VIcon>
          </VBtn>
        </div>
      </VChip>
    </div>

    <div>
      <VChip
        v-if="showOverflowChip"
        class="vd-overflow-chip text-cyan-darken-40 ma-1"
        color="cyan-lighten-90"
        size="small"
        variant="flat"
      >
        {{ overflowText }}
      </VChip>

      <VBtn
        class="vd-overflow-btn px-1 ml-0 my-1"
        color="primary"
        data-test-id="reset-btn"
        size="small"
        variant="text"
        @click="emitResetEvent"
      >
        {{ locales.reset }}
      </VBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

.vd-overflow-chip {
	border: 1px solid $vd-cyan-lighten-90 !important;
}

// Disable overflow button hover state
.vd-overflow-btn :deep(.v-btn__overlay) {
	display: none;
}
</style>
