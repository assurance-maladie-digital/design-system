import Vue from 'vue';
import VueI18n from 'vue-i18n';

import axios from 'axios';

import { supportedLanguages } from '@/translations';
import { default as fallbackLangMessages } from '@/translations/fr';

Vue.use(VueI18n);

const FALLBACK_LANG = 'fr';

/** Default language from previously selected or fallback lang */
let defaultLang = window.localStorage.getItem('lang') || FALLBACK_LANG;

if (!supportedLanguages.includes(defaultLang)) {
	defaultLang = FALLBACK_LANG;
}

export const i18n = new VueI18n({
	locale: defaultLang,
	fallbackLocale: FALLBACK_LANG
});

// Set messages for default language
i18n.setLocaleMessage(FALLBACK_LANG, fallbackLangMessages);

const loadedLanguages = [FALLBACK_LANG]; // Our default language that is preloaded

function setI18nLanguage(lang: string): string {
	i18n.locale = lang;
	axios.defaults.headers.common['Accept-Language'] = lang;
	window.localStorage.setItem('lang', lang);

	const html = document.querySelector('html');

	if (html) {
		html.setAttribute('lang', lang);
	}

	return lang;
}

/**
 * The function to change language, which loads
 * the translation file if needed with webpack dynamic import
 *
 * @param {string} lang The lang to use
 * @returns {Promise<string>}
 */
export async function loadLanguageAsync(lang: string): Promise<string> {
	// If the same language
	if (i18n.locale === lang) {
		return Promise.resolve(setI18nLanguage(lang));
	}

	// If the language was already loaded
	if (loadedLanguages.includes(lang)) {
		return Promise.resolve(setI18nLanguage(lang));
	}

	// If the language isn't supported
	if (!supportedLanguages.includes(lang)) {
		return Promise.reject(lang);
	}

	// If the language hasn't been loaded yet
	const messages = await import(/* webpackChunkName: "translations-[request]" */ `@/translations/${lang}`);
	i18n.setLocaleMessage(lang, messages.default);
	loadedLanguages.push(lang);

	return setI18nLanguage(lang);
}
