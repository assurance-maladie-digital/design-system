import { formErrors, questionErrors, fieldGroup } from './data/formErrors';

import { setFormErrors } from '../';

// Tests
describe('setFormErrors', () => {
	it('sets error messages on different fields', () => {
		expect(setFormErrors(questionErrors, fieldGroup)).toMatchSnapshot();
	});

	it('doesn\'t sets an error on unknown field', () => {
		expect(setFormErrors(formErrors, fieldGroup)).toMatchSnapshot();
	});
});
