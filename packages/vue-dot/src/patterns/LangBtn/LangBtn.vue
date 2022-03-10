<template>
	<VMenu
		v-if="Object.keys(languages).length"
		v-bind="options.menu"
		class="vd-lang-btn"
		content-class="vd-lang-menu"
	>
		<template #activator="{ on }">
			<VBtn
				v-if="currentLangData"
				:aria-label="currentLangData.label"
				v-bind="options.btn"
				v-on="on"
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

		<VList v-bind="options.list">
			<VListItem
				v-for="(item, lang) in languages"
				:key="lang"
				v-bind="options.listTile"
				@click="updateLang(lang)"
			>
				<VListItemTitle v-bind="options.listTileTitle">
					{{ item.nativeName }}
				</VListItemTitle>
			</VListItem>
		</VList>
	</VMenu>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { Languages, AllLanguagesChar, CurrentLangData, Language } from './types';

	// ISO 639-1 language database in a JSON object
	import languages from 'languages';

	import { customizable } from '../../mixins/customizable';

	import { mdiChevronDown } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			availableLanguages: {
				type: [Array, String] as PropType<string[] | AllLanguagesChar>,
				default: () => ['fr', 'en']
			},
			value: {
				type: String,
				default: 'fr'
			},
			hideDownArrow: {
				type: Boolean,
				default: false
			},
			label: {
				type: String,
				default: locales.label
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class LangBtn extends MixinsDeclaration {
		downArrowIcon = mdiChevronDown;

		currentLang = this.value;

		get currentLangClass(): string | undefined {
			return this.hideDownArrow ? undefined : 'ml-1';
		}

		get languages(): Languages {
			let data: Languages = {};

			if (this.availableLanguages !== '*') {
				const availableLanguages = this.availableLanguages as string[];

				availableLanguages.forEach((language: string) => {
					data[language] = languages.getLanguageInfo(language);
				});
			} else {
				// This method computes all the 138 languages,
				// only call it when necessary
				data = this.getFormattedLanguages();
			}

			return data;
		}

		get currentLangData(): CurrentLangData | null {
			if (!this.currentLang) {
				return null;
			}

			return {
				name: this.languages[this.currentLang].nativeName,
				label: `${this.label} ${this.languages[this.currentLang].nativeName}`
			};
		}

		getFormattedLanguages(): Languages {
			const data: Languages = {};

			languages
				.getAllLanguageCode()
				.forEach((language: string) => {
					data[language] = languages.getLanguageInfo(language) as Language;
				});

			return data;
		}

		updateLang(lang: string): void {
			this.currentLang = lang;
			this.$emit('change', lang);
		}
	}
</script>

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
