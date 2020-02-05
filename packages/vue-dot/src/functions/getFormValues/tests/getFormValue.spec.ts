import { formNull, formNotNull } from './data/forms';

import { getFormValues } from '../';

// Tests
describe('getFormValues', () => {
	it('returns all values', () => {
		expect(getFormValues(formNotNull)).toMatchSnapshot();
	});

	it('returns an empty object when all values are null', () => {
		expect(getFormValues(formNull)).toEqual({});
	});
});
