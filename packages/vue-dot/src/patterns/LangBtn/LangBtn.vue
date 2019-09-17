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
				v-bind="options.btn"
				v-on="on"
			>
				<!--
					If flags mode is activated:
					The flag of the current language
				-->
				<img
					v-if="flags"
					:src="currentLangData.flagUrl"
					class="vd-current-flag"
					alt=""
				>

				<!-- Current language -->
				<span
					v-if="currentLangTextBtn"
					class="ml-2"
				>
					{{ currentLangData.name }}
				</span>

				<!-- Down arrow -->
				<VIcon
					v-if="downArrow"
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
				<VListItemAvatar
					v-if="flags"
					v-bind="options.listItemAvatar"
				>
					<img
						:src="`${flagsUrl}${lang}.svg`"
						class="vd-flag-img"
						alt=""
					>
				</VListItemAvatar>

				<!-- Language name -->
				<VListItemTitle v-bind="options.listTileTitle">
					{{ item.nativeName }}
				</VListItemTitle>
			</VListItem>
		</VList>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import config from './config';
	import { Languages } from './types';

	// ISO 639-1 language database in a JSON object
	import languages from 'languages';

	import customizable, { Options } from '../../mixins/customizable';

	import { mdiChevronDown } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			/**
			 * The list of available languages,
			 * by default it's all (*)
			 */
			availableLanguages: {
				type: [Array, Object, String],
				default: '*'
			},
			/** Show the down arrow inside the activator button */
			downArrow: {
				type: Boolean,
				default: true
			},
			/** Activate flags mode */
			flags: {
				type: Boolean,
				default: false
			},
			/** The location of the flags */
			flagsUrl: {
				type: String,
				default: '/img/flags/'
			},
			flagsExt: {
				type: String,
				default: 'svg'
			},
			/** Show the name of the current language inside the activator button */
			currentLangTextBtn: {
				type: Boolean,
				default: true
			},
			ariaLabel: {
				type: String,
				default: 'Choix de la langue. Actuellement :'
			},
			/** The v-model value */
			value: {
				type: String,
				default: 'fr'
			}
		}
	});

	/**
	 * LangBtn is a component that displays a list of languages
	 * to choose from when clicking a button
	 */
	@Component({
		mixins: [
			// Default configuration
			customizable(config)
		],
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class LangBtn extends Props {
		// Mixin computed data
		options!: Options;

		// Icon
		downArrowIcon = mdiChevronDown;

		currentLang = this.value;

		/** Returns the list of languages to display in the list */
		get languages() {
			let data: Languages = {};

			if (this.availableLanguages !== '*') {
				this.availableLanguages.forEach((lang: string) => {
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
		get currentLangData() {
			if (!this.currentLang) {
				return null;
			}

			// Current lang data
			return {
				/** The native name */
				name: this.languages[this.currentLang].nativeName,
				/** The url of the flag */
				flagUrl: `${this.flagsUrl}${this.currentLang}.${this.flagsExt}`,
				/** The accessible name of the main button */
				ariaLabel: `${this.ariaLabel} ${this.languages[this.currentLang].nativeName}`
			};
		}

		/** Returns a formatted object of all the languages */
		getFormattedLanguages() {
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
		updateLang(lang: string) {
			this.currentLang = lang;

			this.$emit('change', lang);
		}
	}
</script>

<style lang="scss" scoped>
	// Flags styles
	.vd-lang-btn {
		.v-avatar img {
			border-radius: 0%;
		}

		.vd-current-flag {
			width: 30px;
		}
	}

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
