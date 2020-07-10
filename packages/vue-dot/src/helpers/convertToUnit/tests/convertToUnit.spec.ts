import { convertToUnit } from '../';

// Tests
describe('convertToUnit', () => {
	it('returns undefined when the value is null', () => {
		expect(convertToUnit(null)).toBeUndefined();
	});

	it('returns undefined when the value is undefined', () => {
		expect(convertToUnit(undefined)).toBeUndefined();
	});

	it('returns undefined when the value is an empty string', () => {
		expect(convertToUnit('')).toBeUndefined();
	});

	it('returns the value when it\'s a string with unit', () => {
		expect(convertToUnit('16px')).toBe('16px');
	});

	it('converts the value when it\'s a string without unit', () => {
		expect(convertToUnit('16')).toBe('16px');
	});

	it('converts the value to a string when it\'s a number', () => {
		expect(convertToUnit(16)).toBe('16px');
	});

	it('converts the value to a string with custom unit when it\'s a number', () => {
		expect(convertToUnit(1, 'rem')).toBe('1rem');
	});
});
