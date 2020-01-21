import { formNull, formNotNull } from './data/forms';

import getFormValue from '../';

// Tests
describe('getFormValue', () => {
	it('returns all values', () => {
		expect(getFormValue(formNotNull)).toMatchSnapshot();
	});

	it('returns an empty object when all values are null', () => {
		expect(getFormValue(formNull)).toEqual({});
	});
});
