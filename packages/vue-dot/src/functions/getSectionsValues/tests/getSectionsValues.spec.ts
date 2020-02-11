import { sectionsNull, sectionsNotNull } from './data/sections';

import { getSectionsValues } from '..';

// Tests
describe('getSectionValues', () => {
	it('returns all values', () => {
		expect(getSectionsValues(sectionsNotNull)).toMatchSnapshot();
	});

	it('returns an empty object when all values are null', () => {
		expect(getSectionsValues(sectionsNull)).toEqual({});
	});
});
