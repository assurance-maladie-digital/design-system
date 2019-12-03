// Disable lint rule because it's clearer to just call new Class
// instead of putting it in a non-used var

// tslint:disable: no-unused-expression

function getControlItem() {
	return localStorage.getItem('vd-storage-control');
}

const testString = 'test';

/** JSON.stringify({}) */
const normalizedObject = JSON.stringify({});

/** JSON.stringify('test') */
const normalizedString = JSON.stringify(testString);

import LocalStorageUtility from '../';

describe('LocalStorageUtility', () => {
	beforeEach(() => localStorage.clear());

	it('should set control object when instantiated', () => {
		new LocalStorageUtility();

		expect(getControlItem()).toBe(normalizedObject);
	});

	it('should clear all previous objects when instantiated and control item doesn\'t exists', () => {
		localStorage.setItem('vd-test', normalizedString);

		new LocalStorageUtility();

		expect(localStorage.getItem('vd-test')).toBe(null);
	});

	it('should check the control object when already instantiated', () => {
		new LocalStorageUtility();

		// Call it a second time to simulate a page refresh
		new LocalStorageUtility();

		expect(getControlItem()).toBe(normalizedObject);
	});

	it('should clear previous items when bumping version', () => {
		new LocalStorageUtility(1);

		localStorage.setItem('vd-test', normalizedObject);

		expect(localStorage.getItem('vd-test')).toBe(normalizedObject);

		// Bump the version
		new LocalStorageUtility(2);

		expect(localStorage.getItem('vd-test')).toBe(null);
	});

	it('should set an item correctly', () => {
		const localStorageUtility = new LocalStorageUtility();

		localStorageUtility.setItem('test', testString);

		expect(localStorage.getItem('vd-test')).toBe(normalizedString);
	});

	it('should get an item correctly', () => {
		const localStorageUtility = new LocalStorageUtility();

		localStorage.setItem('vd-test', normalizedString);

		expect(localStorageUtility.getItem('test')).toBe(testString);
	});

	it('should return null when an item doesn\'t exists', () => {
		const localStorageUtility = new LocalStorageUtility();

		expect(localStorageUtility.getItem('test')).toBe(null);
	});

	it('should work with a custom prefix', () => {
		const localStorageUtility = new LocalStorageUtility(undefined, undefined, 'test-');

		localStorageUtility.setItem('test', testString);

		expect(localStorage.getItem('test-test')).toBe(normalizedString);
	});

	it('should set an item correctly with expiration', () => {
		const localStorageUtility = new LocalStorageUtility(undefined, 10);

		localStorageUtility.setItem('test', testString);

		expect(localStorageUtility.getItem('test')).toBe(testString);
	});

	it('should remove all items when expired', () => {
		// Negative expiration = expired by default
		const localStorageUtility = new LocalStorageUtility(undefined, -1);

		// Simulate previously stored item
		localStorage.setItem('vd-test-1', normalizedString);

		localStorageUtility.setItem('test', testString);

		expect(localStorageUtility.getItem('test')).toBe(null);
		expect(localStorage.getItem('vd-test-1')).toBe(null);
	});

	it('shouldn\'t fail when localStorage isn\'t available', () => {
		Object.defineProperty(window, 'localStorage', {
			value: undefined
		});

		const localStorageUtility = new LocalStorageUtility();

		expect(localStorageUtility.getItem('test')).toBe(null);
		expect(localStorageUtility.setItem('test', 'test')).toBe(false);
	});
});
