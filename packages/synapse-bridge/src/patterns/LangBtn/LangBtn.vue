<script lang="ts">

import { defineComponent } from 'vue';
import { type PropType } from 'vue';
import languages from 'languages';
import { mdiChevronDown } from '@mdi/js';
import { config } from './config';
import { locales } from './locales';
import {
	type Languages,
	type AllLanguagesChar,
	type CurrentLangData,
} from './types';

// ISO 639-1 language database in a JSON object

import { customizable } from '@/mixins/customizable';

export default defineComponent({
	mixins: [customizable(config)],
	props: {
		availableLanguages: {
			type: [Array, String] as PropType<string[] | AllLanguagesChar>,
			default: () => ['fr', 'en'],
			validator: (value: string[] | AllLanguagesChar): boolean => {
				return Array.isArray(value) ? value.length > 0 : value === '*';
			},
		},
		modelValue: {
			type: String,
			default: 'fr',
		},
		hideDownArrow: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
			default: locales.label,
		},
	},
	emits: ['update:modelValue'],
	data() {
		return {
			downArrowIcon: mdiChevronDown,
		};
	},
	computed: {
		currentLangClass(): string | undefined {
			return this.hideDownArrow ? undefined : 'ml-1';
		},

		languages(): Languages {
			let data: Languages = {};

			if (this.availableLanguages === '*') {
				// This method computes all the 138 languages,
				// only call it when necessary
				data = this.getFormattedLanguages();
			} else {
				const availableLanguages = this.availableLanguages;

				for (const language of availableLanguages) {
					data[language] = languages.getLanguageInfo(language);
				}
			}

			return data;
		},

		currentLangData(): CurrentLangData {
			return {
				name: this.languages[this.modelValue].nativeName,
				label: `${this.label} ${this.languages[this.modelValue].nativeName}`,
			};
		},
	},
	watch: {
		modelValue(value: string, oldValue: string): void {
			if (this.availableLanguages !== '*' && !this.availableLanguages.includes(value)) {
				this.$emit('update:modelValue', oldValue);
			}
		},
	},
	methods: {
		getFormattedLanguages(): Languages {
			const data: Languages = {};

			languages
				.getAllLanguageCode()
				.forEach((language: string) => { // eslint-disable-line unicorn/no-array-for-each
					data[language] = languages.getLanguageInfo(language);
				});

			return data;
		},

		updateLang(lang: string): void {
			this.$emit('update:modelValue', lang);
		},
	},
});
</script>

<template>
  <VMenu
    v-if="Object.keys(languages).length > 0"
    v-bind="options.menu"
    class="vd-lang-btn"
    content-class="vd-lang-menu"
  >
    <template #activator="{ props }">
      <VBtn
        v-if="currentLangData"
        v-bind="{
          ...props,
          ...options.btn
        }"
        id="lang-menu-btn"
        :aria-label="currentLangData.label"
      >
        <span :class="currentLangClass">
          {{ currentLangData.name }}
        </span>

        <VIcon
          v-if="!hideDownArrow"
          v-bind="options.icon"
        >
          {{ downArrowIcon }}
        </VIcon>
      </VBtn>
    </template>

    <VList
      v-bind="options.list"
      aria-labelledby="lang-menu-btn"
    >
      <VListItem
        v-for="(item, lang) in languages"
        :key="lang"
        v-bind="options.listTile"
        role="option"
        :aria-label="item.nativeName"
        @click="updateLang(lang as string)"
      >
        <VListItemTitle v-bind="options.listTileTitle">
          {{ item.nativeName }}
        </VListItemTitle>
      </VListItem>
    </VList>
  </VMenu>
</template>

<style lang="scss" scoped>
// Allow scrollbar for the menu & limit it's height to 300px
// (necessary when there is a lot of content)
.vd-lang-menu {
	overflow: auto;
	max-height: 300px;

	.v-btn {
		width: 100%;
		height: 100%;
	}
}
</style>
