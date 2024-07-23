<script lang="ts">
import { defineComponent } from 'vue';

import { mdiPhone } from '@mdi/js';
import { vMaska } from 'maska';
import deepMerge from 'deepmerge';
import { config } from './config';
import { locales } from './locales';

import type { Options } from '@/mixins/customizable';

import { required } from '@/rules/required';
import { exactLength } from '@/rules/exactLength';
import type { ValidationRule } from '@/rules/types';

const PHONE_LENGTH = 10;

export default defineComponent({
  directives: { maska: vMaska },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: undefined,
    },
    required: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change', 'update:modelValue'],
  data() {
    return {
      locales,
      phoneIcon: mdiPhone,
      internalValue: null as string | null,
      counter: PHONE_LENGTH,
      phonemask: { mask: '## ## ## ## ##' },
    };
  },
  computed: {
    textFieldOptions(): Options {
      return deepMerge<Options>(config, this.$attrs);
    },

    rules(): ValidationRule[] {
      return this.required
        ? [required, exactLength(PHONE_LENGTH, true)]
        : [exactLength(PHONE_LENGTH, true)];
    },

    computedValue(): string | null {
      return this.modelValue ? this.formatPhone(this.modelValue) : null;
    },
  },
  methods: {
    formatPhone(value: string): string {
      return value.replace(/(.{2})/g, '$1 ').trim();
    },

    noSpacesCounter(value?: string | undefined): number {
      return value?.replace(/\s/g, '').length || 0;
    },

    setInternalValue(event: any): void {
      this.internalValue = event.target.value.replace(/\s/g, '');
    },

    emitChangeEvent(): void {
      this.$emit('update:modelValue', this.internalValue);
    },
  },
});
</script>

<template>
  <VTextField
    v-maska:[phonemask]
    v-bind="textFieldOptions"
    :model-value="computedValue"
    :rules="rules"
    :counter="counter"
    :counter-value="noSpacesCounter"
    :label="locales.label"
    :variant="outlined ? 'outlined' : 'underlined'"
    color="primary"
    @input="setInternalValue"
    @change="emitChangeEvent"
  >
    <template #append-inner>
      <VIcon>
        {{ phoneIcon }}
      </VIcon>
    </template>
  </VTextField>
</template>
