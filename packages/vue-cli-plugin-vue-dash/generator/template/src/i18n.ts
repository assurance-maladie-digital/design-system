import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from '@/plugins/axios';

import translations from '@/translations';

Vue.use(VueI18n);

// Get default language from previously selected, or from the browser, or fallback to French
let defaultLang = window.localStorage.getItem('lang') || navigator.language.substr(0, 2) || 'fr';

if (!translations.includes(defaultLang)) {
	defaultLang = 'fr';
}

const i18n = new VueI18n({
	locale: defaultLang,
	fallbackLocale: 'fr', // By default, fallback to French if translation isn't found
	silentTranslationWarn: true // Remove warnings from the console, as suggested by the author of vue-i18n
});

const loadedLanguages: string[] = [];

// Set the language everywhere in the app where it needs to be
// This means i18n locale, axios headers, localStorage and HTML lang attribute
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

// The function to change language, which loads the translation file if needed with webpack dynamic import
export function loadLanguageAsync(lang: string): Promise<string> {
	if (!loadedLanguages.includes(lang)) {
		return import(/* webpackChunkName: "translations-[request]" */ `@/translations/${lang}`).then((messages) => {
			i18n.setLocaleMessage(lang, messages.default);
			loadedLanguages.push(lang);
			return setI18nLanguage(lang);
		});
	}

	return Promise.resolve(setI18nLanguage(lang));
}

export default i18n;
