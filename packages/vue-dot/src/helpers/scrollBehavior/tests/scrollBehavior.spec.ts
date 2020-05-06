import { scrollBehavior } from '../';
import { Route } from 'vue-router';
import { Position } from 'vue-router/types/router';

const defaultRoute: Route = {
    path: '/',
    hash: '',
    params: {},
    query: {},
    fullPath: '/',
    matched: []
};

const defaultPosition: Position = { x:0, y:0 };

const savedPosition: Position = {
    x:1,
    y:1
};

// Tests
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