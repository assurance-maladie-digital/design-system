import { Route } from 'vue-router';
import { Position } from 'vue-router/types/router';

type PositionResult = Position | { selector: string; offset?: Position } | void;

/**
 * Native-like scroll behavior for Vue Router
 *
 * @param {Route} to Vue Router to param
 * @param {Route} from Vue Router from param
 * @param {Route} savedPosition Vue Router savedPosition param
 * @returns The computed position
 */
export function scrollBehavior(to: Route, from: Route, savedPosition: void | Position): PositionResult {
	// If there is a hash, this is an anchor, scroll to it
	if (to.hash) {
		return {
			selector: to.hash
		};
	} else {
		// Else simulate browser behavior by returning to the previous position, or fallback to top
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	}
}
