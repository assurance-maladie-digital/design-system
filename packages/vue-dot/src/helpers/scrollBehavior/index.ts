import { Route, Position, PositionResult } from 'vue-router/types/router';

/** Get the scroll position for Vue Router */
export function scrollBehavior(to: Route, from: Route, savedPosition: void | Position): PositionResult {
	if (to.hash) {
		return {
			selector: to.hash
		};
	}

	if (savedPosition) {
		return savedPosition; // Simulate browser behavior
	} else {
		return { x: 0, y: 0 };
	}
}
