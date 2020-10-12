import { Route } from 'vue-router';
import { Next } from '@cnamts/vue-dot/src/types';

// Environment variable
declare const MAINTENANCE: string;

/**
 * Main navigation redirection logic
 *
 * @param {Route} to Vue Router to param
 * @param {Route} from Vue Router from param
 * @param {Route} next Vue Router next param
 * @returns {void}
 */
export function navigationRedirect(to: Route, from: Route, next: Next): void {
	if (MAINTENANCE === 'true') {
		// Avoid infinite loop
		if ('maintenance' !== to.name) {
			// Redirect to maintenance page
			next({ name: 'maintenance' });
		} else {
			// Else, resolve route
			next();
		}
	} else if ('maintenance' === to.name) {
		// Else, if we're trying to access the maintenance page
		// when not in maintenance mode, redirect to home
		next({ name: 'home' });
	} else {
		next();
	}
}
