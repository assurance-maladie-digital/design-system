import {  RouteLocationNormalized } from 'vue-router';

const DEFAULT_POSITION = { x: 0, y: 0 };

/** Get the scroll position for Vue Router (simulate browser behavior) */
export function scrollBehavior(to: RouteLocationNormalized, _from: RouteLocationNormalized, savedPosition: {x: number, y: number}  = {x:0, y:0}  ) {
	if (to.hash) {
		return {
			selector: to.hash
		};
	}

	return savedPosition || DEFAULT_POSITION;
}
