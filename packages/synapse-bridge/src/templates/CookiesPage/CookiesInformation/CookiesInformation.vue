<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import CookiesTable from '../CookiesTable';
import type { CookiesList } from '../CookiesTable/types';
import { propValidator } from '../../../helpers/propValidator';
import { required } from '../../../rules/required';
import { locales } from './locales';

import { TYPE_ENUM_VALUES, TypeEnum } from './TypeEnum';
import { RadioValuesEnum } from './RadioValuesEnum';

export default defineComponent({
  components: {
    CookiesTable,
  },
  props: {
    type: {
      type: String as PropType<TypeEnum>,
      required: true,
      validator: (value: string) =>
        propValidator('type', TYPE_ENUM_VALUES, value),
    },
    tableItems: {
      type: Array as PropType<CookiesList[]>,
      default: () => [],
    },
    modelValue: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      RadioValuesEnum,
      locales,
      rules: [required],
      open: false,
    };
  },
  computed: {
    parsedValue(): string | null {
      if (this.modelValue === null) {
        return null;
      }

      return this.modelValue
        ? RadioValuesEnum.ACCEPT
        : RadioValuesEnum.REJECT;
    },

    showRadios(): boolean {
      return this.type !== TypeEnum.ESSENTIALS;
    },

    detailsLabel(): string {
      return this.open ? locales.hideInformation : locales.showInformation;
    },

    arrowIcon(): string {
      return this.open ? mdiChevronUp : mdiChevronDown;
    },
  },
  methods: {
    toggleDetails(event: Event): void {
      const { open } = event.target as HTMLDetailsElement;
      this.open = open;
    },

    emitChangeEvent(value: string): void {
      const parsedValue = Boolean(value === RadioValuesEnum.ACCEPT);
      this.$emit('update:modelValue', parsedValue);
    },
  },
});
</script>

<template>
  <div class="vd-cookies-information">
    <h2 class="text-subtitle-1 font-weight-bold mb-2">
      {{ locales[type].title }}
    </h2>

    <p class="mb-4">
      {{ locales[type].description }}
    </p>

    <details @toggle="toggleDetails">
      <summary class="mb-1">
        {{ detailsLabel }}

        <VIcon class="mr-2">
          {{ arrowIcon }}
        </VIcon>
      </summary>

      <CookiesTable :items="tableItems" class="mb-2" />
    </details>

    <VRadioGroup
      v-if="showRadios"
      :model-value="parsedValue"
      :rules="rules"
      data-test-id="radio-group"
      inline
      hide-details="auto"
      class="mt-0"
      @change="emitChangeEvent"
    >
      <VSpacer />

      <VRadio
        :label="locales.reject"
        :value="RadioValuesEnum.REJECT"
        color="primary"
      />

      <VRadio
        :label="locales.accept"
        :value="RadioValuesEnum.ACCEPT"
        class="mr-0"
        color="primary"
      />
    </VRadioGroup>
  </div>
</template>

<style lang="scss" scoped>
details > summary {
	cursor: pointer;
	list-style: none;
	user-select: none;

	&::marker,
	&::-webkit-details-marker {
		display: none;
	}
}

.v-input--radio-group :deep(.v-messages) {
	text-align: right;
}
</style>
