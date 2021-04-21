<template>
	<!-- The menu -->
	<VMenu
		v-if="Object.keys(languages).length"
		v-bind="options.menu"
		class="vd-lang-btn"
		content-class="vd-lang-menu"
	>
		<!-- The activator, the main button -->
		<template #activator="{ on }">
			<VBtn
				v-if="currentLangData"
				:aria-label="currentLangData.label"
				v-bind="options.btn"
				v-on="on"
			>
				<!-- Current language -->
				<span :class="currentLangClass">
					{{ currentLangData.name }}
				</span>

				<!-- Down arrow -->
				<VIcon
					v-if="!hideDownArrow"
					v-bind="options.icon"
				>
					{{ downArrowIcon }}
				</VIcon>
			</VBtn>
		</template>

		<!-- Languages list -->
		<VList v-bind="options.list">
			<VListItem
				v-for="(item, lang) in languages"
				:key="lang"
				v-bind="options.listTile"
				@click="updateLang(lang)"
			>
				<!-- Language name -->
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

	import { Languages, AllLanguagesChar, CurrentLangData } from './types';

	// ISO 639-1 language database in a JSON object
	import languages from 'languages';

	import { customizable } from '../../mixins/customizable';

	import { mdiChevronDown } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			/**
			 * The list of available languages,
			 * by default it's all (*)
			 */
			availableLanguages: {
				type: [Array, String] as PropType<string[] | AllLanguagesChar>,
				default: () => ['fr', 'en']
			},
			/** Hide the down arrow inside the activator button */
			hideDownArrow: {
				type: Boolean,
				default: false
			},
			label: {
				type: String,
				default: locales.label
			},
			/** The v-model value */
			value: {
				type: String,
				default: 'fr'
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * LangBtn is a component that displays a list of languages
	 * to choose from when clicking a button
	 */
	@Component({
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class LangBtn extends MixinsDeclaration {
		// Icon
		downArrowIcon = mdiChevronDown;

		currentLang = this.value;

		get currentLangClass(): string | undefined {
			return this.hideDownArrow ? undefined : 'ml-1';
		}

		/** Returns the list of languages to display in the list */
		get languages(): Languages {
			let data: Languages = {};

			if (this.availableLanguages !== '*') {
				const availableLanguages = this.availableLanguages as string[];

				availableLanguages.forEach((lang: string) => {
					// Get the languages info
					data[lang] = languages.getLanguageInfo(lang);
				});
			} else {
				// This method computes all the 138 languages,
				// only call it when necessary
				data = this.getFormattedLanguages();
			}

			return data;
		}

		/** Compute data to simplify the template */
		get currentLangData(): CurrentLangData | null {
			if (!this.currentLang) {
				return null;
			}

			// Current lang data
			return {
				/** The native name */
				name: this.languages[this.currentLang].nativeName,
				/** The accessible name of the main button */
				label: `${this.label} ${this.languages[this.currentLang].nativeName}`
			};
		}

		/** Returns a formatted object of all the languages */
		getFormattedLanguages(): Languages {
			const data: Languages = {};

			languages
				.getAllLanguageCode() // Returns an array with all the language codes supported
				.forEach((lang: string) => {
					// languages.getLanguageInfo(langcode) Returns an object:
					// {
					//  'name': 'name of the language in English',
					//  'nativeName',
					//  'direction'
					// }
					// If langcode isn't supported, it returns {}
					const obj = languages.getLanguageInfo(lang);

					data[lang] = obj;
				});

			return data;
		}

		/** Emit an event with the new value and update currentLang */
		updateLang(lang: string): void {
			this.currentLang = lang;

			this.$emit('change', lang);
		}
	}
</script>

<style lang="scss" scoped>
	// Allow scrollbar for the menu,
	// and limit it's height to 300px
	// (needed when there is a lot of content)
	.vd-lang-menu {
		overflow: auto;
		max-height: 300px;

		.v-btn {
			width: 100%;
			height: 100%;
		}
	}
</style>
