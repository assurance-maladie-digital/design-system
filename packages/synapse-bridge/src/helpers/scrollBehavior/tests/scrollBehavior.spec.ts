import { scrollBehavior } from '../';
import { type RouteLocationNormalized } from 'vue-router';
import { describe, it, expect } from 'vitest';

const defaultRoute = {
	path: '/',
	hash: '',
	params: {},
	query: {},
	fullPath: '/',
	matched: []
} as unknown as RouteLocationNormalized;

const defaultPosition = {
	x: 0,
	y: 0
} as const;

const savedPosition = {
	x: 1,
	y: 1
} as const;

describe('scrollBehavior', () => {
	it('returns the default scroll postion', () => {
		expect(scrollBehavior(defaultRoute, defaultRoute)).toStrictEqual(defaultPosition);
	});

	it('returns the selector custom hash instead of saved position', () => {
		const customHashSelector = '#customHashSelector';
		const hashRoute = { ...defaultRoute, hash: customHashSelector };

		expect(scrollBehavior(hashRoute, defaultRoute, savedPosition)).toStrictEqual({ selector: customHashSelector });
	});

	it('returns the saved position', () => {
		expect(scrollBehavior(defaultRoute, defaultRoute,savedPosition)).toBe(savedPosition);
	});
});
