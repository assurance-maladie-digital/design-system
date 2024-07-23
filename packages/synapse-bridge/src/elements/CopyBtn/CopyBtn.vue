<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import { mdiContentCopy } from '@mdi/js';

import { config } from './config';
import { locales } from './locales';
import { customizable } from '@/mixins/customizable';
import { copyToClipboard } from '@/functions/copyToClipboard';

export default defineComponent({
  mixins: [customizable(config)],
  props: {
    label: {
      type: String,
      required: true,
    },
    textToCopy: {
      type: [Function, String] as unknown as PropType<
				(() => string) | string
      >,
      required: true,
    },
    hideTooltip: {
      type: Boolean,
      default: false,
    },
    tooltipDuration: {
      type: Number,
      default: 2500,
    },
  },
  data() {
    return {
      tooltip: false,
      copyIcon: mdiContentCopy,
      locales,
    };
  },
  methods: {
    copy(): void {
      const contentToCopy
				= typeof this.textToCopy !== 'function' ? this.textToCopy : this.textToCopy();

      copyToClipboard(contentToCopy);

      if (this.hideTooltip) {
        return;
      }

      setTimeout(() => {
        this.tooltip = false;
      }, this.tooltipDuration);
    },
  },
});
</script>

<template>
  <div class="vd-copy-btn">
    <VMenu
      v-model="tooltip"
      :disabled="hideTooltip"
      transition="fade-transition"
      v-bind="$options.menu"
    >
      <template #activator="{ props }">
        <VBtn
          :aria-label="label"
          data-test-id="copy-btn"
          v-bind="{
            ...props,
            ...$options.btn,
          }"
          @click="copy"
        >
          <slot name="icon">
            <VIcon v-bind="$options.icon">
              {{ copyIcon }}
            </VIcon>
          </slot>
        </VBtn>
      </template>

      <slot name="tooltip">
        {{ locales.tooltip }}
      </slot>
    </VMenu>
  </div>
</template>

<style lang="scss">
// Make the tooltip menu look like a tooltip
.vd-copy-tooltip-menu {
	padding: 6px 16px;
	box-shadow: none;
	margin-top: 2px;
	background: rgba(97, 97, 97, 0.9);
	color: white;
}
</style>
