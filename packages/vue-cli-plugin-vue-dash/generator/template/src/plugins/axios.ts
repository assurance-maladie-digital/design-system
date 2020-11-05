import axios, { AxiosError, AxiosResponse } from 'axios';

import { store } from '@/store';

import { mdiAlert as errorIcon } from '@mdi/js';
<% if (i18n) { %>
import common from '@/translations/fr/common';
<% } %>
/** API_URL env var */
declare const API_URL: string;

/** The axios instance */
const instance = axios.create({
	withCredentials: false,
	baseURL: API_URL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

/** Default error message */
const DEFAULT_ERROR_MESSAGE = <% if (i18n) { %>common.defaultErrorMessage<% } else { %>'Une erreur inconnue est survenue'<% } %>;

// Response interceptor to handle errors globally
instance.interceptors.response.use(undefined, (error: AxiosError) => {
	let errorMessage: string;

	// If we don't have an error or we have a 500 HTTP Code
	if (!error.response || error.response.status >= 500) {
		// Use the default message
		errorMessage = DEFAULT_ERROR_MESSAGE;
	} else {
		// Else, use message from server or fallback to default one
		errorMessage = error.response.data.message || DEFAULT_ERROR_MESSAGE;
	}

	if (errorMessage) {
		// Send notification error
		store.dispatch('notification/notify', {
			type: 'error',
			message: errorMessage,
			icon: errorIcon
		});
	}

	return Promise.reject(error);
});

export { instance as axios };
export { AxiosResponse };
