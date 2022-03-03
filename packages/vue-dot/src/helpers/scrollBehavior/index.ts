import { Route, Position, PositionResult } from 'vue-router/types/router';

const defaultPosition = { x: 0, y: 0 };

/** Get the scroll position for Vue Router (simulate browser behavior) */
export function scrollBehavior(to: Route, from: Route, savedPosition: void | Position): PositionResult {
	if (to.hash) {
		return {
			selector: to.hash
		};
	}

	return savedPosition || defaultPosition;
}
